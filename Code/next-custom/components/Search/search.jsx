import style from "../../styles/Search.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";
const Search = ({ search, loadingData, dataBooks, loadnigStatus }) => {
  const number = dataBooks.count;
  const datas = dataBooks.books;
  // set up form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    await search(data.search);
    reset();
  };
  const handlerClear = async () => {
    await loadnigStatus();
  };
  return (
    <div className={style.container_search}>
      <form className={style.form_search} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className={style.input_search}
          placeholder="Vui lòng nhập từ khóa để tìm kiếm"
          {...register("search", {
            required: {
              value: true,
            },
          })}
        />
        <button
          onClick={handlerClear}
          type="submit"
          className={
            loadingData
              ? style.btn_search
              : `${style.btn_search} ${style.clear}`
          }
        >
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
        <button type="submit" className={style.btn_search}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <div
        className={
          loadingData ? style.search_data : `${style.search_data} ${style.null}`
        }
      >
        {number === 0 ? (
          <h2 className={style.err_data}>
            <i className="fa-solid fa-database"></i>
            Dữ liệu không tồn tại!
            <i className="fa-solid fa-database"></i>
          </h2>
        ) : (
          <>
            {datas?.map((item) => {
              return (
                <div key={item._id} className={style.search_box}>
                  <Link
                    href={`/book/${item._id}`}
                    className={style.search_link}
                  >
                    <div className={style.image}>
                      <img
                        src={`${item.imageLink}/${item.imageGogle.id}`}
                        alt={item.name}
                      />
                    </div>
                    <div className={style.box_data}>
                      <h3 className={style.data_h3}>{item.name}</h3>
                      <p className={style.data_text}>{item.description}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
