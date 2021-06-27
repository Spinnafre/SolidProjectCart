import { SendMessage } from "./SendMessage";

const createSut=()=>{
    return new SendMessage()
}

describe('SendMessage',()=>{
    afterEach(()=>jest.clearAllMocks())
    it('should return undefined',()=>{
        //System under test
        const sut=createSut()
        expect(sut.sendMessage({msg:'asd',name:'DaviSpin'})).toBeUndefined()
    })
    it('should call console.log with "~ asd -> Status: DaviSpin"',()=>{
        const sut=createSut()
        const obj={msg:'asd',name:'DaviSpin'}
        const consoleSpy=jest.spyOn(console,'log')
        sut.sendMessage({msg:'asd',name:'DaviSpin'})
        expect(consoleSpy).toHaveBeenCalledWith(`\u007E ${obj.msg} -> Status: ${obj.name}`)
    })
    it('should call console.log once',()=>{
        const sut=createSut()
        
        const consoleSpy=jest.spyOn(console,'log')
        sut.sendMessage({msg:'asd',name:'DaviSpin'})
        expect(consoleSpy).toBeCalledTimes(1)
        
    })
    it('should call sendMessage once',()=>{
        const sut=createSut()
        const obj={msg:'asd',name:'DaviSpin'}
        const sendMessageSpy=jest.spyOn(sut,'sendMessage')
        sut.sendMessage(obj)
        expect(sendMessageSpy).toHaveBeenCalledWith(obj)
    })
    
})