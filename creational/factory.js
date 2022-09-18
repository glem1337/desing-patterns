class Membership {
    name
    type
    cost

    getInfo () {
        console.log(`${this.name} (${this.type}): ${this.cost}`)
    }
}

class SimpleMembership extends Membership {
    constructor(name) {
        super()
        this.name = name
        this.cost = 50
    }
}

class StandardMembership extends Membership {
    constructor(name) {
        super()
        this.name = name
        this.cost = 150
    }
}

class PremiumMembership extends Membership {
    constructor(name) {
        super()
        this.name = name
        this.cost = 500
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple

        const member = new Membership(name)
        member.type = type

        return member
    }
}

const factory = new MemberFactory()

const members = [
    factory.create('Evhenii', 'simple'),
    factory.create('Elena', 'premium'),
    factory.create('Vasilisa', 'standard'),
    factory.create('Ivan', 'premium'),
    factory.create('Petr')
]

members.forEach(m => {
    m.getInfo()
})
