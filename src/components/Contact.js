
import {ReactComponent as GmailLogo} from '../SVG files/gmail.svg';

function Contact() {
  return (
    <div id="Contact">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center py-6">
        Contact Me
      </h1>

      <div className="justify-items-center grid grid-cols-1">
        <GmailLogo className="place-self-center w-8 h-8 mt-4" />
        <p className="inline-flex text-white  my-12 rounded text-lg">send me an email at: riley.j.raso@gmail.com </p>
      </div>
    </div>
  );
}

export default Contact;
