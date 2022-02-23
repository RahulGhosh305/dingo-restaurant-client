import * as React from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { fakeAuthProvider } from './auth';


//* Router
// export default function App() {
//   return (
//     <AuthProvider>
//       <h1>Auth Example</h1>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<PublicPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route
//             path="/protected"
//             element={
//               <RequireAuth>
//                 <ProtectedPage />
//               </RequireAuth>
//             }
//           />
//         </Route>
//       </Routes>
//     </AuthProvider>
//   );
// }



//* Navbar and Page show
// const Layout = () => {
//   return (
//     <div>
//       <AuthStatus />

//       <ul>
//         <li>
//           <Link to="/">Public Page</Link>
//         </li>
//         <li>
//           <Link to="/protected">Protected Page</Link>
//         </li>
//       </ul>

//       <Outlet />
//     </div>
//   );
// }


//* Context API and provider
// interface AuthContextType {
//   user: any;
//   signin: (user: string, callback: VoidFunction) => void;
//   signout: (callback: VoidFunction) => void;
// }

// let AuthContext = React.createContext<AuthContextType>(null!);

// const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   let [user, setUser] = React.useState<any>(null);

//   let signin = (newUser: string, callback: VoidFunction) => {
//     return fakeAuthProvider.signin(() => {
//       setUser(newUser);
//       callback();
//     });
//   };

//   let signout = (callback: VoidFunction) => {
//     return fakeAuthProvider.signout(() => {
//       setUser(null);
//       callback();
//     });
//   };

//   let value = { user, signin, signout };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }


//* Auth
// const useAuth = () => {
//   return React.useContext(AuthContext);
// }

//* AuthStatus
// const AuthStatus = () => {
//   let auth = useAuth();
//   let navigate = useNavigate();

//   if (!auth.user) {
//     return <p>You are not logged in.</p>;
//   }

//   return (
//     <p>
//       Welcome {auth.user}!{' '}
//       <button
//         onClick={() => {
//           auth.signout(() => navigate('/'));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   );
// }

//* PrivateRoute / RequireAuth
// const RequireAuth = ({ children }: { children: JSX.Element }) => {
//   let auth = useAuth();
//   let location = useLocation();

//   if (!auth.user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//     // Redirect them to the /login page, but save the current location they were
//     // trying to go to when they were redirected. This allows us to send them
//     // along to that page after they login, which is a nicer user experience
//     // than dropping them off on the home page.
//   }

//   return children;
// }


//* PublicPage
// const PublicPage = () => {
//   return <h3>Public</h3>;
// }


//* ProtectedPage
// const ProtectedPage = () => {
//   return <h3>Protected</h3>;
// }


//* LoginPage
// const LoginPage = () => {
//   let navigate = useNavigate();
//   let location = useLocation();
//   let auth = useAuth();

//   let from = location.state?.from?.pathname || '/';

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     let formData = new FormData(event.currentTarget);
//     let username = formData.get('username') as string;

//     auth.signin(username, () => {
//       navigate(from, { replace: true });
//       // Send them back to the page they tried to visit when they were
//       // redirected to the login page. Use { replace: true } so we don't create
//       // another entry in the history stack for the login page.  This means that
//       // when they get to the protected page and click the back button, they
//       // won't end up back on the login page, which is also really nice for the
//       // user experience.
//     });
//   }

//   return (
//     <div>
//       <p>log in page</p>

//       <form onSubmit={handleSubmit}>
//         <label>
//           Username: <input name="username" type="text" />
//         </label>{' '}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }
