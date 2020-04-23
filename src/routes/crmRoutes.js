import {
  addNewContact,
  getContact,
  getContactById,
  updateContactById,
  deleteContactById,
} from '../controllers/crmController';
const routes = (app) => {
  app
    .route('/contact')
    .get((req, res, next) => {
      console.log(`Request from ${req.originalUrl}`);
      console.log(`Request type ${req.method}`);
      next();
    }, getContact)
    .post(addNewContact);
  app
    .route('/contact/:contactID')
    .get(getContactById)
    .put(updateContactById)
    .delete(deleteContactById);
};

export default routes;
