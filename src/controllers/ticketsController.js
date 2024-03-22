import ticketDAO from "../dao/ticketsDao.js";

const C = console.log.bind(console.log);

export const getAllTickets = (req, res) => {
    ticketDAO.getAll()
        .then(result => {
            res.json(result);
        })
        .catch(err => console.error(err));
};

export const getOneTicket = (req, res) => {
    ticketDAO.getOne(req.params.barcode)
        .then(result => {
            if (result != null) {
                res.json(result);
            } else {
                res.json({
                    status: "Ticket not found"
                });
            }
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
};

export const insertTicket = (req, res) => {
    ticketDAO.insertTicket(req.body)
        .then(result => {
            if (result) {
                res.json({
                    status: "Ticket saved"
                });
            }
        })
        .catch(err => {
            res.json({
                status: "Server unavailable"
            });
        });
};

export const updateTicket = (req, res) => {
    ticketDAO.updateTicket(req.params.barcode, req.body)
        .then(result => {
            if (result) {
                res.json({
                    status: "Ticket updated"
                });
            }
        })
        .catch(err => {
            res.json({
                status: "Server unavailable"
            });
        });
};

export const deleteTicket = (req, res) => {
    ticketDAO.deleteTicket(req.params.barcode)
        .then(result => {
            if (result) {
                res.json({
                    status: "Ticket deleted"
                });
            }
        })
        .catch(err => {
            res.json({
                status: "Server unavailable"
            });
        });
};
