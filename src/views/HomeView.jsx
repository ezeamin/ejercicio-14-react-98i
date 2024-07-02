import { useSession } from '../stores/useSession';

const HomeView = () => {
  const { user, isLoggedIn } = useSession();

  console.log(user, isLoggedIn);

  return <div>HomeView</div>;
};
export default HomeView;
