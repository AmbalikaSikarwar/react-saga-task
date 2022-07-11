import {
  REGISTER_ERROR,
  REGISTER_SUCCESS,

  LOGIN_SUCCESS,
  LOGIN_ERROR,

  DELETE_SUCCESS,

  UPDATE_SUCCESS,
  UPDATE_ERROR,
} from "../Action/actionType";

const initState = { 
  register_User: localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : [],
  token: localStorage.getItem("Token") ?  localStorage.getItem("Token") : false
};

const userReducer = (state = initState, action) => {

  console.log("actionsReducer1", action.payload);
  console.log("actionsReducer2", action);

  switch (action.type) {
    case REGISTER_SUCCESS:
      var user = state.register_User;
      user.push(action.payload)     
      localStorage.setItem("userData", JSON.stringify(user));
      return {
        ...state,
        register_User: [...user],
      }

      case REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
      break;

    case LOGIN_SUCCESS:
      let userlistget = localStorage.getItem("userData");
      let allUser = JSON.parse(userlistget);
      {
        allUser.map((data) => {
          if (
            data.email ==action.payload.email &&
            data.password ==action.payload.password

          )
          
          {
            let name = action.payload.email
            localStorage.setItem("user",(name))
            let token = "21sdf2sdf15d1SDfsdf1654";
            localStorage.setItem("Token", JSON.stringify(token));
          }
        });
      }
      return {
        ...state,
        users: action.user,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
      };

      case DELETE_SUCCESS:
        let userlist = JSON.parse(localStorage.getItem("userData"));
        userlist.splice(action.payload, 1);
        localStorage.setItem("userData", JSON.stringify(userlist))
        return{
          ...state,
          register_User:[...userlist],
        }


    case UPDATE_SUCCESS:
      // debugger;
      let update_list = JSON.parse(localStorage.getItem("userData"));
      console.log('userdata', update_list);
      let updateuser = {
        firstName:action.payload.firstName,
        email:action.payload.email,
        password:action.payload.password,
        number:action.payload.number,
        role:action.payload.role
      }
      update_list.splice(action.id, 1, updateuser)
      console.log('updateddata', updateuser)
      localStorage.setItem("userData", JSON.stringify(update_list));
      return {
        ...state,
        register_User:[...update_list],
      };

    case UPDATE_ERROR:
      return {
        ...state,
        error: action.user,
      };

    default:
      return state;
  }
};

export default userReducer;
