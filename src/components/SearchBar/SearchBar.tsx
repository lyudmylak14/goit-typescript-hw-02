import { Formik, Form, Field, FormikHelpers } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { BiSearch } from "react-icons/bi";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

interface FormValues {
  query: string;
}


const initValues: FormValues = {
  query: "",
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const notify = () => toast.error("Please, write search query!");

  const handleSearch = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    const query = values.query.trim();

    if (query === "") {
      notify();
      return;
    }
    onSearch(query);
    actions.resetForm();
  };

  return (
    <header>
      <Formik initialValues={initValues} onSubmit={handleSearch}>
        <Form className={css.form}>
          <Field
            className={css.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.sendBtn} type="submit">
            <BiSearch />
            Search
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </Form>
      </Formik>
    </header>
  );
}
