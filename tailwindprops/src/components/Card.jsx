import React from 'react'
function Card({heading,para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?"}){
    return(
        <article className="group">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
  />

  <div className="p-4">
    <a href="#">
      <h3 className="text-lg font-medium text-white">{heading}</h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white">
      {para}
    </p>
  </div>
</article>

    )
}

export default Card