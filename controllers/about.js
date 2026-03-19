'use strict';
import logger from "../utils/logger.js";
import cardStore from "../models/card-store.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");
   
      const viewData = {
      title: "Playlist App About",
      cards: cardStore.getCardInfo()
    };
    logger.info(viewData.cards)
    response.render('about', viewData); 
  },
};

export default about;
