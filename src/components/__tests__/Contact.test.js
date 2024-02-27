import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact us Pages test cases", ()=>{
    test("Should load contact us Componennt",() =>{
        render(<Contact />);
    
       const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
         
    });
    
    test("Should load button inside Contact us Componennt",() =>{
        render(<Contact />);
    
       const button = screen.getByText("Send Message");
        expect(button).toBeInTheDocument();
         
    });
    // instead of test we can write it it is alias of test
    it("Should load placeHolder text inside Contact us Componennt",() =>{
        render(<Contact />);
    
       const inputName = screen.getByPlaceholderText("Enter Your Mesage");
        expect(inputName).toBeInTheDocument();
         
    });
} );



 