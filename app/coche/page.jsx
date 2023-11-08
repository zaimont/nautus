// import react from react;
import '../globals.css';
import '../scripts/page';

export default function Coche() {
  return (
    <body className='bg-white'>
      <div className="md:max-h-full justify-center items-center h-screen lg:px-[200px]  grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="bg-white w-[300px] h-[480px] flex flex-col rounded-t-3xl rounded-r-3xl shadow-2xl">
          <div className=' justify-center flex items-center  '>
            <img className="w-300 h-211" src="paquete1.png" alt="" />
          </div>
          <p className="text-gray-900  font-poppins text-xl font-semibold leading-normal text-left lg:px-[15px]">Paquete 1</p>

          <p className='text-gray-900 font-poppins text-xs leading-normal text-left lg:px-[15px]'>Buscas un seguro funcional, con las coberturas necesarias sin hacer un gran desembolso inicial.</p>
          <br />
          <p className='text-gray-900 font-poppins text-base font-bold leading-normal lg:px-[15px]'>Destacado</p>
          <div className='text-gray-900 font-poppins text-xs lg:px-[15px]'>
            <p>5% Deducible en daños materiales.</p>
            <p>10% Deducible en robo total.</p>
            <p>Gastos médicos hasta $200,000MXN</p>
            <p>Responsabilidad Civil hasta $4,000,000MXN</p>
          </div>
          <br />
          <fieldset className='lg:px-[20px] '>
            <input id="draft" class="peer/draft" type="radio" name="status" checked />
            <label for="draft" className="peer-checked/draft:text-red-600 text-base font-normal leading-5 font-poppins  text-black">Seleccionar</label>
          </fieldset>

        </div>
        <div className="bg-white w-[300px] h-[480px] flex flex-col rounded-t-3xl rounded-r-3xl shadow-2xl">
          <img className='w-300 h-211' src="paquete2.png" alt="" />
          <div className='h-[100px]  w-[280px]'>
          <p className="text-gray-900  font-poppins text-xl font-semibold leading-normal text-left lg:px-[15px]">Paquete 2</p>
          <p className='text-gray-900 font-poppins text-xs leading-normal text-left lg:px-[15px]'>Incrementa tu protección y reduce los gastos provocados en un accidente y/o robo</p>
          <br />
          </div>
          <div className='h-[100px]  w-[280px]'>
          <p className='text-gray-900 font-poppins text-base font-bold leading-normal text-left lg:px-[15px]'>Destacado</p>
          <div className='text-gray-900 font-poppins text-xs text-left lg:px-[15px]'>
            <p>3% Deducible en daños materiales.</p>
            <p>5% Deducible en robo total.</p>
            <p>Gastos médicos hasta $500,000MXN</p>
            <p>Responsabilidad Civil hasta $4,000,000MXN</p>
            <br />
            </div>
            <div className='h-[100px]'>
            <fieldset className='lg:px-[20px]'>
              <input id="published" class="peer/published" type="radio" name="status" checked />
              <label for="published" className="peer-checked/published:text-red-600 text-base font-normal leading-5 font-poppins text-black">Seleccionar</label>
            </fieldset>
            </div>
          </div>
        </div>
        
        

      </div>
      <div className="min-h-screen flex flex-col justify-between">
  <div className="flex-grow"></div> {/* Esto ocupará espacio en la parte superior */}
  <div className="flex-shrink flex justify-center items-end">
    <button className="bg-red-600 hover:bg-red-700 rounded-full w-80 h-30">
      Continuar <img className="inline-block" src="flechaB.png" alt="" />
    </button>
  </div>
</div>


      

    </body>

  )
}