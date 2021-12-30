import { useRef, useState } from "react";
import "./styles.css";
class book_class{
    constructor(){
        this.title=""
        this.author=""
        this.price=""
    }
}
function CompilerMainComponent() {
    const [book, setBook] = useState([]);
    let ref_title = useRef();
    let ref_author = useRef();
    let ref_price = useRef();
    function handleSubmit() {
        let title = ref_title.current.value.trim();
        let author = ref_author.current.value.trim();
        let price = ref_price.current.value.trim();
        if (title != "" && author != "" && price != "") {
           let newBook= new  book_class()
           newBook.title=title;
           newBook.author=author;
           newBook.price=price;
           if(book==null) setBook(newBook)
           else setBook((pre)=>[...pre,newBook])
        }
        ref_title.current.value=""
        ref_author.current.value=""
        ref_price.current.value=""
    }
    function deleteHandler(data){
        let key=data.title
        let res=book.filter((b)=>{
            return b.title!=key;
        })
        
        setBook(res)

    }

    return (
        <div className="CompilerComponent">
            <>
                <h1>Enter Book</h1>
                <label for="title">Title</label>
                <input id="title" ref={ref_title}></input>
                <input id="author" ref={ref_author}></input>
                <input ref={ref_price}></input>
                <button onClick={handleSubmit}>Submit</button>
            </>
            <>
                {book!=[]?(
                    book.map((book_item) => {
                        return (
                            <>  
                                <h1>Title:{book_item.title}</h1>
                                <h1>Author:{book_item.author}</h1>
                                <h1>Price:{book_item.price}</h1>
                                <button onClick={()=>deleteHandler(book_item)}>Delete</button>
                            </>
    
                        )
    
    
                    })
                ):(
                    <></>
                )}
            </>



        </div>
    )
}
export default CompilerMainComponent;