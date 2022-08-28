import { library } from "@fortawesome/fontawesome-svg-core";

// Standard icon imports
import {
  faTimes,
  faCaretLeft,
  faCaretRight,
  faCircle,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

// Branded icon imports
import { faInstagram, faFacebook, faTwitter, faSnapchatGhost } from "@fortawesome/free-brands-svg-icons";

export const loadIcons = () => {
  library.add(
    faInstagram,
    faTwitter,
    faFacebook,
    faSnapchatGhost,
    faTimes,
    faCaretLeft,
    faCaretRight,
    faCircle,
    faStore,
  );
};
