import {
  Box,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/core";
import { EmailIcon } from "@chakra-ui/icons";

const TestPage = () => {
  return (
    <Box>
      <Button leftIcon={<EmailIcon />}>Email</Button>
      <IconButton
        icon={<Avatar name="Dan Abrahmov" />}
        aria-label="E-Mail"
        colorScheme="blue"
        isRound={true}
        size="lg"
      />
      <Menu>
        {/* <MenuButton as={Button} rightIcon="chevron-down">
          Actions
        </MenuButton> */}
        <MenuButton>
          <IconButton
            icon={<Avatar name="Dan Abrahmov" />}
            aria-label="E-Mail"
            colorScheme="blue"
            isRound={true}
            size="lg"
          />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem as="a" href="#">
            Attend a Workshop
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default TestPage;
