async function main(){
    bindLogoutButton();

    const token=getToken();
    if(token===null){
        location.assign('/login');
        return;
    }

    const user = await getUserByToken(token);
    if(user===null){
        localStorage.clear();
        location.assign('/login');
        return;
    }

    const books = await getBooks(token);
    if(books===null){
        return;
    }

    render(books);
}

function logout(){
    
}

// 버튼에 이벤트 연결
function bindLogoutButton(){
    const btnLogout = document.querySelector('#btn_logout');
    btnLogout.addEventListener('click',logout);
}

// 토큰 체크
function getToken(){
    return localStorage.getItem('token');
}

// 토큰으로 서버에서 나의 정보 받아오기
async function getUserByToken(token){
    try{
        const res = await axios.get('https://api.marktube.tv/v1/me',{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });
        return res.data;
    } catch(e){
        console.log('getUserByToken error',e);
        return null
    }
}

// 나의 책을 서버에서 받아오기
async function getBooks(token){
    try{
        const res = await axios.get('https://api.marktube.tv/v1/book',{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });
        return res.data;
    } catch(e){
        console.log('getBooks error',e);
        return null;
    }
}

// 받아온 책을 그리기
function render(books){
    const listElement = document.querySelector('#list');
    for(const book of books){
        const bookElement = document.createElement('div');
        bookElement.classList.value = 'col-md-4';
        bookElement.innerHTML = `
        <div>
            <div>
                <p>${book.title===''?'제목없음':book.title}</p>
                <div>
                    <div>
                        <a href='/book?id=${book.bookId}>
                            <button type='button'>View</button>
                        </a>
                        <button data-book-id='${book.bookId}' class='btn-delete'>Delete</button>
                    </div>
                    <small>${new Date(book.createdAt,).toLocaleString()}</small>
                </div>
            </div>
        </div>
        `;
        listElement.append(bookElement);
    }
    document.querySelectorAll('.btn-delete').forEach(element=>{
        element.addEventListener('click',async event=>{
            const bookId = event.target.dataset.bookId;
            try{
                await delteBook(bookId);
                location.reload();
            } catch(e){
                console.log(e);
            }
        });
    });
}
async function deleteBook(bookId){
    const token = getToken();
    if(token===null){
        location.assign('/login');
        return;
    }
    await axios.delete(`https://api.marktube.tv/v1/book/${bookId}`,{
        headers:{
            Authorization:`Bearer ${token}`,
        },
    });
    return;
}

document.addEventListener('DOMContentLoaded',main);