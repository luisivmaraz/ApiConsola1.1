import Ticket from '../models/ticketModel.js'

const C = console.log.bind(console.log)
const ticketDAO = {}

ticketDAO.getAll = async () => {
    const tickets = await Ticket.find()
    return tickets
}

ticketDAO.getOne = async (barcodeTicket) => {
    const ticket = await Ticket.findOne({ barcode: barcodeTicket })
    return ticket
}

ticketDAO.insertTicket = async (ticket) => {
    const ticketSaved = new Ticket(ticket)
    await ticketSaved.save()
    return true
}

ticketDAO.updateTicket = async (barcodeTicket, ticket) => {
    const ticketUpdated = await Ticket.findOneAndUpdate({ barcode: barcodeTicket }, ticket)
    if (ticketUpdated != null) {
        return true
    } else {
        return false
    }
}

ticketDAO.deleteTicket = async (barcodeTicket) => {
    const ticketDeleted = await Ticket.findOneAndDelete({ barcode: barcodeTicket })
    if (ticketDeleted != null) {
        return true
    } else {
        return false
    }
}

export default ticketDAO;
