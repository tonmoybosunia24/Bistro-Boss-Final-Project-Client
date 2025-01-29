import service from '../../../assets/home/chef-service.jpg'

const ChefService = () => {
       return (
              <section style={{backgroundImage: `url(${service})`}} className='w-full h-[420px] flex bg-cover bg-center bg-fixed mt-20 p-10 lg:p-20'>
                     <div className='flex flex-col justify-center bg-white dark:text-black text-center p-5 lg:p-10 space-y-2'>
                            <h2 className='text-3xl font-cinzel'>Bistro Boss</h2>
                            <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                     </div>
              </section>
       );
};

export default ChefService;