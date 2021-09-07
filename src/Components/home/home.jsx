import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './home.scss' ;
import { getAllBooks } from '../../Redux/book/bookActions';
import { Spinner, Card } from "react-bootstrap";
export default function Home() {

    const [books, setBooks] = useState([])
    const bookReducer = useSelector(state => state.bookReducer)
    const dispatch = useDispatch()
    
    
    useEffect(() => {
        console.log(books)
        if(books.length === 0)
        {
            dispatch(getAllBooks());
            setBooks(bookReducer.books)
        }
        return () => {
        }
    }, [dispatch,bookReducer])

    return (
        <div id="homePage" className="container">
            <h1>Welcome to our BookStore</h1>
            <h5>You can find all the books you need here</h5>

            <div id="recommendations">
                <p>Here are some recommendations:</p>
            </div>
            <div>
                {bookReducer.loading === true?
                <Spinner id="spinner" animation="border" />: 
                books.map(book => (
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                                {book.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
                </div>
        </div>
    )
}
