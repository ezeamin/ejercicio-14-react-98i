const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const postLoginFn = async (data) => {
  // data: { username, password }

  // 1. Traer los usuarios de la base de datos
  const res = await fetch(`${BACKEND_URL}/users`);
  const users = await res.json();

  if (!res.ok || !Array.isArray(users)) {
    throw new Error('Ocurrió un error al intentar iniciar sesión');
  }

  const foundUser = users.find((user) => {
    return user.username === data.username;
  });

  if (!foundUser) {
    throw new Error('El usuario o la contraseña no son correctos');
  }

  const isPasswordTheSame = foundUser.password === data.password;

  if (!isPasswordTheSame) {
    throw new Error('El usuario o la contraseña no son correctos');
  }

  // Acá ya sabemos que esta todo ok, loguear al usuario
  return { ...foundUser, password: undefined };
};
