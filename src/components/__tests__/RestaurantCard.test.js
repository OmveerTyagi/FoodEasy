import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";

 test('should render restaurnat card from', () => {
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name =screen.getByText("Wow! Momo");
    expect(name).toBeInTheDocument();
   
 });


 
