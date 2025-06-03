import {Router} from "express";

const subscriptionsRouter = Router();

subscriptionsRouter.get('/', (req, res) => res.send ({title: 'GET all subscriptions'}));

subscriptionsRouter.get('/:id', (req, res) => res.send ({title: 'GET user subscriptions'}));

subscriptionsRouter.post('/', (req, res) => res.send ({title: 'CREATE user subscriptions'}));

subscriptionsRouter.put('/:id', (req, res) => res.send ({title: 'Update user subscription'}));

subscriptionsRouter.delete('/:id', (req, res) => res.send ({title: 'DELETE user subscriptions'}));

subscriptionsRouter.get('/user/:id', (req, res) => res.send ({title: 'Get all user subscriptions'}));

subscriptionsRouter.put('/:id/cancel', (req, res) => res.send ({title: 'CANCEL subscription'}));

subscriptionsRouter.get('/upcoming-renewals', (req, res) => res.send ({title: 'GET upcoming subscription'}));


export default subscriptionsRouter;