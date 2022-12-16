import style from "../../styles/Search.module.css";
import { useForm } from "react-hook-form";
const Search = ({ searchData }) => {
  // set up form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    await searchData(data.search);
  };
  return (
    <div className={style.container_search}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form_search}>
        <input
          type="text"
          className={style.input_search}
          {...register("search", {
            required: {
              value: true,
            },
          })}
          placeholder="Search Rm?..."
        />
        <button type="submit" className={style.btn_search}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
