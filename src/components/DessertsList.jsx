import {
    Container,
    Heading,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'

export default function DessertsList(props) {

    const desserts = [
        {
            name: "Chocolate Cake",
            calories: 400,
            createdAt: "2022-09-01",
        },
        {
            name: "Ice Cream",
            calories: 200,
            createdAt: "2022-01-02",
        },
        {
            name: "Tiramisu",
            calories: 300,
            createdAt: "2021-10-03",
        },
        {
            name: "Cheesecake",
            calories: 600,
            createdAt: "2022-01-04",
        },
    ];

    const lowCaloriesDesserts = props.data
        .filter((dessert) => {
            return dessert.calories < 500;
        })
        .sort((a, b) => {
            return a.calories - b.calories;
        })
        .map((dessert) => {
            return (
                <ListItem>{dessert.name} - {dessert.calories} cal</ListItem>
            )
        })

    return (
        <Container>
            <Heading>List of low calorie desserts:</Heading>
            <UnorderedList>{lowCaloriesDesserts}</UnorderedList>
        </Container>
    );
}