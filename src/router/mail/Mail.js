class Mail {

    constructor(id, to, from, subject, text, mailbox) {
        this.id = id
        this.to = to
        this.from = from
        this.subject = subject
        this.text = text
        this.mailbox = mailbox
    }

    async create() {
        let mail = {
            to: this.to,
            from: this.from,
            subject: this.subject,
            text: this.text,
            mailbox: this.mailbox
        }


        try {

            this.validMail(this.to)
            return mail
        } catch (error) {

        }
    }

    async deleteById() {
        let mail = {
            _id: this.id
        };

        try {

        } catch (error) {

        }
    }

    validMail(mail) {
        var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

        if (!mail) return false;

        if (mail.length > 256) return false;

        if (!tester.test(mail)) return false;

        // Further checking of some things regex can't handle
        var mailParts = email.split('@');
        var account = mailParts[0];
        var address = mailParts[1];
        if (account.length > 64) return false;

        var domainParts = address.split('.');
        if (domainParts.some(function (part) {
                return part.length > 63;
            })) return false;

        return true;
    }
}

module.exports = new Mail()