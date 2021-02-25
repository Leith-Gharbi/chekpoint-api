import React, { Component ,useState,useEffect }  from 'react';
import axios from 'axios';
import {Grid} from '@material-ui/core';


const UserList = () => {
  const [listOfUSer, setlistOfUSer] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res);
        setlistOfUSer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>


<div className="container" style={{flexWrap:"wrap "}}>


        {listOfUSer.map((user) => (
            <div className="col-md-6 ">
{user.username}
            </div>
        ))}


      </div>
    </>
  );
};

export default UserList;
