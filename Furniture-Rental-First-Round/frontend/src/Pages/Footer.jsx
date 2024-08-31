
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,Input, TagLeftIcon
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle,AiFillDribbbleCircle} from "react-icons/ai"
import { BiPaperPlane,BiUpArrowAlt} from "react-icons/bi";
import AppStoreBadge from '../Photos/pngegg.png';
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'11px'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
    const GoUp=()=>{
        window.scroll({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.600', 'gray.200')}
      fontSize="12px">
        
      <Container as={Stack} maxW={'6xl'} py={10} m="auto">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>LINKS</ListHeader>
            <Text>About Us</Text>
            <Text>Culture</Text>
            <Text>Investors</Text>
            <Text>Careers</Text>
            <Text>Contact</Text>
            <Text>Our Benifits</Text>
            <Text>Sitemap</Text>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>INFORMATION</ListHeader>
            <Text>Blog</Text>
            <Text>FAQs</Text>
            <Text>Documents Required</Text>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>POLICIES</ListHeader>
            <Text>Shipping Policy</Text>
            <Text>Cancellation & Return</Text>
            <Text>Privacy Policy</Text>
            <Text>Rental Terms & Condition</Text>
            <Text>Referral Terms & Condition</Text>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>NEED HELP</ListHeader>
            <Input placeholder='Chat with us (9AM - 6PM)' fontSize={"10px"} width="200px"></Input>
           
            <Text ml="20px"><TagLeftIcon as={BiPaperPlane}></TagLeftIcon> contact@furniture.com</Text>
            <ListHeader>DOWNLOAD APP</ListHeader>
            <Image width={"100px"} src={AppStoreBadge}></Image>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={'row'} spacing={6} fontSize="15px">
            <SocialButton >
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Facebook'}>
              <BsFacebook />
            </SocialButton>
            <SocialButton label={'Dribble'}>
              <AiFillDribbbleCircle />
            </SocialButton>
            <SocialButton label={'Twitter'}>
              <AiFillTwitterCircle />
            </SocialButton>
          </Stack>
          <Text cursor={"pointer"} onClick={GoUp}><TagLeftIcon as={BiUpArrowAlt}></TagLeftIcon> Go Up</Text>
        </Container>
      </Box>
    </Box>
  );
}