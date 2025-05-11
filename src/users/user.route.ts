import express from "express";
import { IUser } from '../types'
import { User } from "./user-model";

const router = express.Router();
const BASE_PATH = "/api/users";

router
  .route(BASE_PATH)
  // find all
  .get((_req, res, next) => {
    User.find()
      .lean()
      .then((users: IUser[]) => res.send(users))
      .catch(next);
  })
  // create new
  .post((req, res, next) => {
    User.create(req.body)
      .then((user: IUser) => res.send(user))
      .catch(next);
  });

router
  .route(`${BASE_PATH}/search`)
  // search
  .post((req, res, next) => {
    User.find(req.body)
      .lean()
      .then((users: IUser[]) => res.send(users))
      .catch(next);
  });

router
  .route(`${BASE_PATH}/:id`)
  // get one
  .get((req, res, next) => {
    User.findById(req.params.id)
      .lean()
      .orFail()
      .then((user: IUser) => res.send(user))
      .catch(next);
  })
  // update
  .put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .lean()
      .orFail()
      .then((user: IUser) => res.send(user))
      .catch(next);
  })
  // delete
  .delete((req, res, next) => {
    User.findByIdAndDelete(req.params.id)
      .lean()
      .orFail()
      .then(() => res.send(req.params))
      .catch(next);
  });

export default router;
