import React from "react";
import {useSelector} from 'react-redux';

const Navbar = () => {

  const {tasksList} = useSelector((state) => state.tasks)
  // hekkkk

  return (
    <>
      <h1 className="text-center my-4 text-primary">Project Management</h1>
      <p className="text-center lead">{`Currently ${tasksList.length} task(s) pending`}</p>

    </>
    
  );
};

export default Navbar;
