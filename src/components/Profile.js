import React from 'react';

function Profile({ user }) {
  const { email, password, name } = user || {};
  return (
    <>
      <h1>Este es el perfil de  {email} </h1>
      <dt>Email</dt>
      <dd>{email}</dd>
      <dt>Contraseña</dt>
      <dd>{password}</dd>
      <dt>Nombre</dt>
      <dd>{name}</dd>
    </>
  );
}

export default Profile;