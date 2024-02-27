import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header";
import appStore from "../../Redux/AppStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

 
test("should render Header component with a login button", ()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );
    const logInbutton =screen.getByRole("button",{name:"log-in"});
    expect(logInbutton).toBeInTheDocument();
})


 
test("should render Header component with a login button", ()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );
    const cartItem =screen.getByText("Cart-(0)");
    expect(cartItem).toBeInTheDocument();
});
 
// test("should change login button to logout", ()=>{
//     render(
//         <BrowserRouter>
//     <Provider store={appStore}>
//     <Header />
//     </Provider>
//     </BrowserRouter>
//     );
//     fireEvent.click(log-in)
//     const logOut =screen.getByRole("button",{name:"Log-Out"});
//     expect(logOut).toBeInTheDocument();
// });

