import { useState } from "react";
import { postActivity, getCountries } from "../../Redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import validation from "./validation";
import styles from "./Form.module.css";

const Form = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);

    const [errors, setErrors] = useState({});

    let countriesList = countries.map((country) => {
        return {
            name: country.name,
            id: country.id,
        };
    });

    const [selected, setSelected] = useState("");

    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
        setErrors(validation({
            ...form,
            [event.target.name]: event.target.value,
        }));
    };

    const handleCountries = (event) => {
        if (event.target.value !== "Select Country" && !form.countries.includes(event.target.value)) {
            setForm({
                ...form,
                countries: [...form.countries, event.target.value],
            });
            setErrors(validation({
                ...form,
                countries: [...form.countries, event.target.value],
            }));
        }
    };

    const handleSeasons = (event) => {
        if (event.target.value !== "Select season" && !form.season.includes(event.target.value)) {
            setForm({
                ...form,
                season: event.target.value,
            });
            setErrors(validation({
                ...form,
                season: event.target.value,
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (form.name === "" || form.duration === "" || form.difficulty === "" || form.season === "" || form.countries === "" || form.season === "") {
            return alert("Incomplete fields, please complete all fields");
        }
        dispatch(postActivity(form));
        alert("Tourist activity successfully created");
        setForm({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: [],
        });
    };

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    return (
        <div className="container" >
            <form onSubmit={handleSubmit}>
                <h1>Create your tourist activity</h1>
                <div >
                    <div>
                        <label>Name</label>
                    </div>
                    <input type="text" onChange={handleChange} value={form.name} name="name" placeholder="Activity name" />
                    {errors.name && <p >{errors.name}</p>}
                </div>
                <div >
                    <div>
                        <label>Difficulty</label>
                    </div>
                    <input type="text" onChange={handleChange} value={form.difficulty} name="difficulty" placeholder="From 1 to 5" />
                    {errors.difficulty && <p>{errors.difficulty}</p>}
                </div>
                <div >
                    <div>
                        <label>Duration</label>
                    </div>
                    <input className={styles.inputs} type="text" onChange={handleChange} value={form.duration} name="duration" placeholder="Enter the duration in hours (1hs)" />
                    {errors.duration && <p className={styles.errors}>{errors.duration}</p>}
                </div>
                <div className={styles.seasons}>
                    <select onChange={handleSeasons}>
                        <option className={styles.season}>Select season</option>
                        <option className={styles.season} value="summer">Summer</option>
                        <option className={styles.season} value="autumn">Autumn</option>
                        <option className={styles.season} value="winter">Winter</option>
                        <option className={styles.season} value="spring">Spring</option>
                    </select>
                    {errors.season && <p className={styles.errors}>{errors.season}</p>}
                </div>
                <select className={styles.countries} value={selected} onChange={(event) => [handleCountries(event), setSelected(event)]}>
                    <option>Select Country</option>
                    {countriesList?.map((country) => {
                        return (
                            <option className={styles.countries} key={country.id} value={country.id}>
                                {country.name}
                            </option>
                        );
                    })}
                </select>
                {errors.countries && <p className={styles.errors}>{errors.countries}</p>}
                {errors.countries && <p className={styles.errors}>{errors.countries}</p>}
                <ul>
                    {form.countries.map((country) => {
                        return country + " ,"
                    })}
                </ul>
                <button
                    className={styles.button}
                    disabled={
                        errors.name ||
                        errors.difficulty ||
                        errors.duration ||
                        errors.countries ||
                        errors.season
                    }
                    type="submit"
                >
                    Create Activity
                </button>
            </form>

        </div>

    );
};

export default Form;