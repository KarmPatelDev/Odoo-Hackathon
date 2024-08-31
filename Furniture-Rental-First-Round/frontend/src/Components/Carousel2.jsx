import {  Box ,Button,Icon} from "@chakra-ui/react"
import {BsArrowRightCircle,BsArrowLeftCircle} from "react-icons/bs";
import styled from"./Carousel2.module.css"
import { Card, CardBody, CardFooter,Image,Stack,Heading,Text,Divider } from '@chakra-ui/react'
import { useToast } from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
let data=[
  {
    "image": "https://p.rmjo.in/productSquare/jqccn9bx-250x250.jpg",
    "title": "Heston 4-Seater Dining Table & Chairs",
    "price": 469,
    "stock": "available",
    "category": "dining",
    "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
    "days": "3 days",
    "id": 45
  },
  {
    "image": "https://p.rmjo.in/productSquare/i9sbrcr5-250x250.jpg",
    "title": "Heston 6-Seater Dining Table & Chairs",
    "price": 679,
    "stock": "available",
    "category": "dining",
    "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
    "days": "3 days",
    "id": 46
  },
  {
    "image": "https://p.rmjo.in/productSquare/dup85lff-250x250.jpg",
    "title": "Marco 4-Seater Dining Table & Chairs",
    "price": 779,
    "stock": "available",
    "category": "dining",
    "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
    "days": "3 days",
    "id": 47
  },
  {
    "image": "https://p.rmjo.in/productSquare/jotwg0bl-250x250.jpg",
    "title": "Alton 4-Seater Dining Table & Chairs",
    "price": 849,
    "stock": "available",
    "category": "dining",
    "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
    "days": "3 days",
    "id": 48
  },
  {
    "image": "https://p.rmjo.in/productSquare/qabfne17-500x500.jpg",
    "title": "Gordon 6-Seater Dining Table & Chairs",
    "price": 1149,
    "stock": "available",
    "category": "dining",
    "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
    "days": "3 days",
    "id": 49
  },
  {
    "image": "https://p.rmjo.in/productSquare/24oxliut-500x500.jpg",
    "title": "IKEA Tarno Outdoor Table & Chairs",
    "price": 249,
    "stock": "available",
    "category": "living",
    "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
    "days": "3 days",
    "id": 50
  },
  {
    "image": "https://p.rmjo.in/productSquare/mdvcclnl-500x500.jpg",
    "title": "Melltorp & Adde Dining Table (White)",
    "price": 129,
    "stock": "available",
    "category": "dining",
    "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
    "days": "3 days",
    "id": 51
  },
  {
    "image": "https://p.rmjo.in/productSquare/9dfflsa6-500x500.jpg",
    "title": "Caramel 4-Seater Coffee Table (Blue)",
    "price": 629,
    "stock": "available",
    "category": "dining",
    "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
    "days": "3 days",
    "id": 52
  },
  {
    "image": "https://p.rmjo.in/productSquare/gfrxanei-500x500.jpg",
    "title": "Queen Foam Mattress (6x5)",
    "price": 259,
    "stock": "available",
    "category": "bedroom",
    "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
    "days": "3 days",
    "id": 53
  },
  {
    "image": "https://p.rmjo.in/productSquare/iurdarhq-500x500.jpg",
    "title": "Queen Coir & Foam Mattress (6x5)",
    "price": 299,
    "stock": "available",
    "category": "bedroom",
    "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
    "days": "3 days",
    "id": 54
  }
]

export const FurnitureSlider=()=>{
  const btnpressprev=()=>{
    let boxel=document.querySelector(`.${styled.product_container}`);
    boxel.scrollLeft-=400
    console.log("hek")
    console.log(boxel.scrollLeft)
  }
  const btnpressnext=()=>{
    let boxel=document.querySelector(`.${styled.product_container}`);
    boxel.scrollLeft+=400
    console.log(boxel.scrollLeft)

  }
    return(
        <Box className={styled.carousel} py="60px" >
            <Text width={"130px"} textAlign={"left"} color="black" ml="2%">You'll love to take these Home!!</Text>
            <hr className={styled.line} />
            <Box className={styled.Button_container} >
            <Button className={styled.buttons} onClick={btnpressnext}><Icon as={BsArrowRightCircle}/></Button>
            <Button className={styled.buttons} onClick={btnpressprev}><Icon as={BsArrowLeftCircle}/></Button>
            </Box>
            <Box className={styled.product_container} id="productsss" >
                {data.reverse().map(el=><Cards image={el.image} key={Date.now()+el.id} title={el.title} price={el.price} prod={el}></Cards>)}
            </Box>
        </Box>
    )
}

const Cards=({image,
  title,
  price,
  prod
  })=>{
    const toast=useToast()
    const {totalItem,item,totalPrice,Price,setDetails}=useContext(AuthContext)
return <Card minW={"350px"} bg={"white"} rounded="3xl" className={styled.card}>
  <CardBody >
    <Image
      src={image}
      alt={title}
      borderRadius='lg'
      width={"250px"}
      margin="auto"
    />
    <Stack mt='6' spacing='3'>
      <Heading size='xs' textAlign={"left"}>{title}</Heading>
      <Box display="flex" justifyContent="space-between">
      <Box>
      <Text color="grey">Rent</Text>
      <Text color='black' fontWeight={600} fontSize='sm'>
        ₹{price}
      </Text>
      </Box>
      <Button bg={"red.500"} color="white" fontSize="sm" size={"sm"} onClick={()=> {
        if(item<4){
        totalItem(item=>item+1);
        totalPrice(p=>p+price);
        setDetails(list=>[...list,prod]);
        return (
          toast({
          title: 'Success',
          description: "Product added to the cart",
          status: 'info',
          duration: 1000,
          isClosable: true,
        }))}else{
            return(
              toast({
              title: 'Oops!',
              description: "Maximum limit reached",
              status: 'warning',
              duration: 1000,
              isClosable: true,
              }))
        }
      }}>Add to Cart</Button>
      </Box>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
  </CardFooter>
</Card>
}