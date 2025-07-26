import { useAppStore } from "../zustand/store";

const PRofile = () => {
  const { user, isLoggedIn } = useAppStore();

  if (!isLoggedIn) {
    return <h1>Please Log in</h1>;
  }
  return (
    <section>
      <div>
        <h2>Welcome {user.name}</h2>
      </div>
    </section>
  );
};

export default PRofile;
