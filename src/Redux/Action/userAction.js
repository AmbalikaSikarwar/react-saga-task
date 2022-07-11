import {
  REGISTER_REQUEST,
  LOGIN_REQUEST,
  UPDATE_REQUEST,
  DELETE_REQUEST
} from "./actionType";

export const Register = (data) => {
  return {
    type: REGISTER_REQUEST,
    payload: data,
  };
};

export const Login = (data) => {
  return {
    type: LOGIN_REQUEST,
    payload: data,
  };
};


export const Delete = (index)=>{
  return{
    type:DELETE_REQUEST,
    payload:index,
  }
}

export const update = (index,firstName,email, password, number, role) =>{
  console.log('dataaaa', index, firstName, email,password, number, role)
  return{
    type:UPDATE_REQUEST,
    payload:{firstName, email, password, number, role},
    id:index
  }
}


