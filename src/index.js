import { createSignal, onCleanup } from 'solid-js'
import { render } from 'solid-js/web'
// import { createBrowserHistory } from 'history'
// import { Route } from './components/Route'
// import { Router, useRouter } from './components/router'
// import { PUBLIC_URL, SERVER_URL } from './constants'
import './css/normalize.css'
import './css/main.css'
// import { Routes, Route } from "solid-start"

// const history = createBrowserHistory()

// function createRouteHandler() {
//     // Get the current location.
//     const currentLocation = history.location
//     const [getLocation, setLocation] = createSignal(currentLocation.pathname)
//     const unlisten = history.listen((location, action) => {
//         // location is an object like window.location
//         setLocation(location.pathname)
//         console.log(action, location.pathname, location.state)
//     })
//     onCleanup(() => unlisten())
//     return (match) => match === getLocation()
// }


const Home = () => (
    <>
        <h1>Welcome to this Simple Routing Example</h1>
        <p>Click the Routes in the Navigation above to load different routes.</p>
    </>
)

const Profile = () => (
    <>
        <h1>Your Profile</h1>
        <p>This section could be about you.</p>
    </>
)

const Settings = () => (
    <>
        <h1>Settings</h1>
        <p>All that configuration you never really ever want to look at.</p>
    </>
)


const ExampleRouterChild = () => {
    const [router] = useRouter()
    // prettier-ignore
    return (
        <>
            <p>{(router && router.history.location.pathname)}</p>
        </>
    )
}

const App = () => {
    // const matches = createRouteHandler()

    return (
        <>
            {/* <Routes>
                <ul>
                    <li>
                        <Route path='/'>Home</Route>
                    </li>
                    <li>
                        <Route path='/profile'>Profile</Route>
                    </li>
                    <li>
                        <Route path='/settings'>Settings</Route>
                    </li>
                </ul>
                <Switch>
                    <Match when={(matches('/'))}> */}
            <Home />
            {/* <ExampleRouterChild></ExampleRouterChild> */}
            {/* </Match>
                    <Match when={(matches('/profile'))}>
                        <Profile />
                        <ExampleRouterChild></ExampleRouterChild>
                    </Match>
                    <Match when={(matches('/settings'))}>
                        <Settings />
                        <ExampleRouterChild></ExampleRouterChild>
                    </Match>
                </Switch>
                <p>{`PUBLIC_URL: ${PUBLIC_URL}`}</p>
                <p>{`SERVER_URL: ${SERVER_URL}`}</p>
            </Routes> */}


        </>
    )
}

render(App, document.getElementById("app"))
