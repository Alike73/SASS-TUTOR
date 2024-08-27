import React from 'react';

const Blog = () => {

  return (
    <div className="grid">
      <main className="grid__main">
          <h1>Blog article</h1>
          <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
      </main>
  
      <aside className="grid__sidebar">
          <div className="grid__widget green">
              <h2>Aside info</h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Explicabo neque ipsam ut praesentium asperiores nesciunt obcaecati, 
                  esse repudiandae iure reiciendis expedita! Veritatis maiores, 
                  ut voluptatum aspernatur sequi quaerat perspiciatis et!
              </p>
          </div>
          <div className="grid__widget magenta">
              <h2>Check out this coll thing!</h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Explicabo neque ipsam ut praesentium asperiores nesciunt obcaecati, 
                  esse repudiandae iure!
              </p>
          </div>
          <div className="grid__widget magenta">
              <h2>More coll staff is right here too!</h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id dignissimos nobis? 
                  Quam necessitatibus quidem doloremque aspernatur hic?
              </p>
          </div>
      </aside>
    </div>
  )
};

export default Blog;