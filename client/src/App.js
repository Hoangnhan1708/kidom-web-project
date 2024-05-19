import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes/routes';
import { DefaultLayout } from './components/Layout';
import { ENV } from './env';
function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/login/auth/me`, { credentials: 'include' })
            .then((res) => res.json())
            .then((me) => {
                setUser(me);
            });
    }, []);
    const handleLogout = () => {
        fetch(`http://localhost:5000/login/logout`, { credentials: 'include' }).then(() => {
            setUser(null);
            window.location.replace(`${ENV.BASE_URL}login`);
        });
    };
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    Layout === Fragment ? (
                                        <Page user={user} />
                                    ) : (
                                        <Layout user={user} logout={handleLogout}>
                                            <Page user={user} />
                                        </Layout>
                                    )
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
