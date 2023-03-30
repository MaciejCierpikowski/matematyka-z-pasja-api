module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins['email'].services.email.send(
        {
          to: 'julita.klocek@interia.pl',
          from:'julita.klocek@interia.pl',
          subject: 'Nowy uczeń - matematyka-z-pasja.pl',
          text:`${result.firstname} ${result.lastname} napisał do Ciebie przez matematyka-z-pasja.pl.
          Treść wiadomości: ${result.message}.
          Skontaktuj się z nim przez email: ${result.email}, albo przez telefon: ${result.phone}.`
        }
      );
    }

    catch(err) {
      console.log(err)
    }
  }
}

