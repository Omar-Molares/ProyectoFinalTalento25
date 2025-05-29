

const Login = () => {
  const onConfirm = (evt) => {
    evt.preventDefault()
    console.log("Datos registrados")
  }
  return (
    <div>
      <h2>Ingresa tus datos de usuario</h2>
      <UserForm onConfirm={onConfirm}/>
    </div>
  )
}

const UserForm = ( props ) => {
  return (
    <form onSubmit={props.onConfirm}>
      <input name="name" placeholder="username"></input>
      <input name="password" placeholder="password"></input>
      <button>Send</button>
    </form>
  )
}

export default Login;