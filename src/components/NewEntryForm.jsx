import React from 'react'
// import PropTypes from 'prop-types';

// import {  } from "@mantine/core"
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
const NewEntryForm = (props) => {
  const [open, setOpen] = React.useState(false);

  console.log(props.formData);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className='font-sans'>

        <Button onClick={handleOpen} variant="gradient">
          Open Dialog
        </Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>New Entry</DialogHeader>
          <DialogBody>
            <div className='flex flex-col bg-pink-100 p-4 gap-9'>
              <Input variant="outlined" label="Name" placeholder="Name" />
              <Input variant="outlined" label="Phone Number" placeholder="Phone Number" />
              <Input variant="outlined" label="Email" placeholder="Email" />
              <Input variant="outlined" label="Hobbies" placeholder="Hobbies" />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>

    </>
  );
}

export default NewEntryForm