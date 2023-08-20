import Select from 'react-select'

const FormFilter = (
    {title,invoicesoptions,dateoptions,handleChangeInvoices,name,handleChangeDates,handleChangeSuppliers,handleChangeItems,supplieroptions,itemoptions,handleSubmit, itemname,suppliername,invoiceval,dateval}
) => {

  return (
    <div className='mt-1'>
      <h2 className='text-center text-3xl font-bold text-main'>{title}</h2>
      <form className='mt-5' onSubmit={handleSubmit} id='my-form'>
          <div className='grid grid-cols-4 gap-6 mb-4'>
              <div>
                  <label className='mb-2 block font-bold'>رقم الفاتورة</label>
                  <Select
                      closeMenuOnSelect={false}
                      isMulti
                      options={invoicesoptions}
                      name='invoice'
                      value={invoiceval}
                      onChange={handleChangeInvoices}
                      placeholder=''
                      styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: 'rgb(107, 114 ,128)',
                            padding: '0.3rem',
                            borderRadius: '14px',
                          }),
                        }}
                />
              </div>
              <div>
                  <label className='mb-2 block font-bold'>التاريخ</label>
                  <Select
                      closeMenuOnSelect={false}
                      isMulti
                      options={dateoptions}
                      name='date'
                      value={dateval}
                      onChange={handleChangeDates}
                      placeholder=''
                      styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: 'rgb(107, 114 ,128)',
                            padding: '0.3rem',
                            borderRadius: '14px',
                          }),
                        }}
                />
              </div> 
              <div>
                  <label className='mb-2 block font-bold'>{name}</label>
                  <Select
                      closeMenuOnSelect={false}
                      isMulti
                      options={supplieroptions}
                      name='suppliername'
                      value={suppliername}
                      onChange={handleChangeSuppliers}
                      placeholder=''
                      styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: 'rgb(107, 114 ,128)',
                            padding: '0.3rem',
                            borderRadius: '14px',
                          }),
                        }}
                />
              </div>
              <div>
                  <label className='mb-2 block font-bold'>اسم المنتج</label>
                  <Select
                      closeMenuOnSelect={false}
                      isMulti
                      options={itemoptions}
                      name='itemname'
                      value={itemname}
                      onChange={handleChangeItems}
                      placeholder=''
                      styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: 'rgb(107, 114 ,128)',
                            padding: '0.3rem',
                            borderRadius: '14px',
                          }),
                        }}
                />
              </div> 
          </div>
      </form>
    </div> 
  )
}

export default FormFilter