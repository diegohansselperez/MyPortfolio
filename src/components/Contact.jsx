import style from '../styles/Contact.module.css';

export function Contact() {
  return (
    <div id="contact_section" className={style.contact_section}>
      <div className={style.contact_headings}>
        <h2>Contacto</h2>
        <div className={style.divider}></div>
      </div>
      <div className={style.contact_form}>
        <h4>ESCRIBEME AL CORREO</h4>
        <form
          action="https://formsubmit.co/diegohansselp24@gmail.com"
          method="POST"
          className={style.form}
        >
          <label htmlFor="name">
            <input required name="name" type="text" placeholder="Nombre" />
          </label>
          <label htmlFor="email">
            <input required name="email" type="email" placeholder="Email" />
          </label>
          <label htmlFor="comment">
            <textarea
              name="comment"
              required
              placeholder="Escribe un mensaje..."
              rows="10"
              style={{
                resize: 'none',
                height: '150px',
                fontFamily: 'Helvetica',
              }}
            ></textarea>
          </label>
          <div>
            <input className={style.btn_submit} type="submit" />
            <input type="hidden" name="_subject" value="Mi Portfolio" />
          </div>
        </form>
      </div>
    </div>
  );
}
