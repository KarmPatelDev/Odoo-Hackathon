import {  Box ,Button,Icon} from "@chakra-ui/react"
import {BsArrowRightCircle,BsArrowLeftCircle} from "react-icons/bs";
import styled from"./Carousel3.module.css"
import { Card, CardBody, CardFooter,Image,Avatar,Stack,Heading,Text,Divider } from '@chakra-ui/react'
import Quotes from "../Photos/Icons/Quotes.png"
let data=[
    {
        "image":"https://www.rentomojo.com/public/images/testimonials/kushal-tiwari.jpg",
        "name":"Kushal Tiwari ",
        "details":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        "id":"1q"
      },
    {
        "image":"https://www.rentomojo.com/public/images/testimonials/navin-kumar.jpg",
        "name":"Navin Kumar",
        "details":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        "id":"2q"
      },
    {
        "image":"https://www.rentomojo.com/public/images/testimonials/anjali-sharma.jpg",
        "name":"Anjali Sharma",
        "details":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        "id":"3q"
      },
    {
        "image":"https://www.rentomojo.com/public/images/testimonials/shreyas-ravetkar.jpg",
        "name":"Shreyas Ravetkar",
        "details":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        "id":"4q"
      },
    {
        "image":"https://www.rentomojo.com/public/images/testimonials/nikita-sharma.jpg",
        "name":"Nikita Sharma",
        "details":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        "id":"5q"
      },
    {
        "image":"https://www.rentomojo.com/public/images/testimonials/manish-srivastava.jpg",
        "name":"Manish Sirvastava",
        "details":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        "id":"6q"
      },
    
]

export const FurnitureSlider2=()=>{
  const btnpressprev=()=>{
    let boxel=document.querySelector(`.${styled.product_container}`);
    boxel.scrollLeft-=540
  }
  const btnpressnext=()=>{
    let boxel=document.querySelector(`.${styled.product_container}`);
    boxel.scrollLeft+=540
  }
    return(
        <Box className={styled.carousel} py="60px" >
            <Box>
            <Text width={"130px"} textAlign={"left"} color="black" fontSize={"lg"} ml="10%"> <b>Over 1.5 Lakh</b> Happy subscribers</Text>
            <hr className={styled.line} />
            <br />
            <Text width={"130px"} textAlign={"left"} color="grey" ml="10%">Here's what they have to say about this website</Text>
            <Box className={styled.Button_container} mt="20px"  >
            <Button className={styled.buttons} onClick={btnpressnext}><Icon as={BsArrowRightCircle}/></Button>
            <Button className={styled.buttons} onClick={btnpressprev}><Icon as={BsArrowLeftCircle}/></Button>
            </Box>
            </Box>
            <Box className={styled.product_container}>
                {data.map(el=><Cards image={el.image} key={Date.now()+el.id} name={el.name} details={el.details}></Cards>)}
            </Box>
        </Box>
    )
}

const Cards=({image,
  name,
  details,
  })=>{

return <Card minWidth={"500px"} bg="#f5f7fa" rounded="3xl" className={styled.card}>
  <CardBody >
    <Stack mt='6' spacing='3'>
      <Heading size='xs'>{}</Heading>
      <Box display="flex" gap={"10px"}>
      <Avatar name={name} src={image} size="lg" />
      <Text textAlign={"left"} mt="18px">{name}</Text>
      <Image position={"absolute"}  top={0} right={20}  w={"100px"} src={Quotes}></Image>
      </Box>
      <Box >
      <Text marginTop={"30px"} color="black" lineHeight={"20px"} fontSize={"xs"} textAlign={"left"}>{details}</Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
}