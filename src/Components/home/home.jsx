import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './home.scss' ;
import { getAllBooks } from '../../Redux/book/bookActions';
import { Spinner, Card, CardGroup, Row, Col } from "react-bootstrap";
export default function Home() {

    const [books, setBooks] = useState([])
    const bookReducer = useSelector(state => state.bookReducer)
    const dispatch = useDispatch()
    
    
    useEffect(() => {
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
                <CardGroup>
                <Row xs={1} md={2} className="g-4">
                {books.map(book => (
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header>
                                {book.title}
                            </Card.Header>
                            <Card.Img src="https://cdn.icon-icons.com/icons2/2622/PNG/512/book_icon_158035.png"/>
                            <Card.Body>
                                <Card.Text>
                                    {book.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
                </CardGroup>
                }           
                </div>
        </div>
    )
}
