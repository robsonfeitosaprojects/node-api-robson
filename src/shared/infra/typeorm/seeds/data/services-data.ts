import ICreateProductAttributesDTO from '@modules/products/dtos/ICreateProductAttributesDTO'
import CreateProductDTO from '@modules/products/dtos/ICreateProductDTO'
import { ICreateProductVariationsDTO } from '@modules/products/dtos/ICreateProductVariationsDTO'

export const servicesData: CreateProductDTO[] = [
  {
    name: 'Troca de óleo com filtro',
    published: 'publish',
    visibility: 'public',
    mode_data: 'multiple',
    price: 230,
    old_price: 310,
    cod_product: '1729dc75-cfea-4fd8-8170-53af59e1d3c6',
    emphasis: false,
    type: 'service',
    time: '180',
    short_description: `  
    <p>Oferecemos um serviço rápido e eficiente de troca de óleo lubrificante para garantir o desempenho ideal do seu veículo. Contamos com uma equipe especializada que utiliza produtos de alta qualidade, adaptados às especificações do fabricante. Além de prolongar a vida útil do motor, nossa troca de óleo é realizada de maneira conveniente, proporcionando praticidade e mantendo seu veículo funcionando suavemente..</p>
    <ul>
        <li><span>- Óleos Ipiranga - Sintético 5W30</span></li>
        <li><span>- Filtro de Óleo - Wega JFO-0H00</span></li>
        <li><span>- Filtro de Ar do Motor - Wega JFA-0K16</span></li>
        <li><span>- Anel do Bujão de Cárter</span></li>
    </ul>`,
    slug: 'troca-de-oleo-com-filtro',
    categories: JSON.stringify([]),
    time_discount_id: null,
    description: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, lectus at sagittis lacinia, sem ex lobortis diam, interdum accumsan justo enim id sapien. Cras eget magna rutrum, dictum turpis eu, luctus ligula. Duis laoreet metus eu nulla rhoncus aliquam. Integer sagittis interdum sapien at tristique. Maecenas porttitor arcu eu nisi venenatis dapibus. Phasellus pulvinar maximus libero. Sed ac cursus magna. Nunc vitae odio iaculis, ornare erat id, interdum lacus. </p>
    <p>Morbi euismod laoreet nunc, eu auctor nisi pharetra sed. Pellentesque odio magna, scelerisque nec venenatis in, rhoncus nec lectus. Nunc posuere molestie leo quis vestibulum. Nunc aliquet lorem in massa laoreet molestie. Mauris est sapien, pharetra vel consequat semper, vulputate id augue. Etiam odio lectus, tincidunt id urna at, molestie finibus tellus. Pellentesque pharetra sed orci vel porttitor. Mauris eget viverra est, ut egestas elit. Nullam erat massa, sollicitudin ac erat vel, aliquet imperdiet libero. Nulla porttitor et dolor vel lobortis. Nam id tortor magna.</p>
    <p>Quisque id nisi arcu. In lacinia elit vitae auctor aliquet. Donec ultrices luctus ornare. Sed ultricies ultrices interdum. Proin dictum nisi lectus, vel auctor libero dictum non. Aliquam in mauris elementum, tristique nisi in, rutrum diam. Donec molestie, libero id molestie pretium, sem lacus tincidunt dolor, eget pharetra tellus metus eget quam. Ut molestie euismod risus. Fusce convallis lorem quis lectus varius aliquam. Pellentesque enim augue, lobortis imperdiet dolor sit amet, porta vulputate nulla. Ut malesuada, ex a finibus ornare, ipsum risus molestie urna, nec sodales ex erat nec leo. Mauris vehicula cursus nulla. Nullam tellus nunc, consectetur vel ullamcorper ac, posuere ac enim. Aliquam egestas purus in sapien feugiat, eu posuere lectus fringilla. In tempor lobortis ullamcorper. Aenean sit amet risus faucibus, efficitur felis sed, cursus lectus.</p>
    <p>Donec laoreet lacinia ligula, quis euismod massa. Praesent in felis id libero blandit vehicula eget a ante. Nam consequat ex a laoreet feugiat. Donec sit amet nibh volutpat, porttitor ex ut, euismod metus. Vestibulum in velit eu urna suscipit commodo a ut purus. Cras iaculis a massa at maximus. Integer venenatis est vitae nunc ullamcorper tincidunt. Phasellus ullamcorper mi purus, in consequat sem commodo vitae. Curabitur hendrerit pellentesque mi vel hendrerit. Quisque id venenatis arcu.</p>`,
  },
  {
    name: 'Revisão do carro',
    published: 'publish',
    visibility: 'public',
    mode_data: 'multiple',
    price: 750,
    old_price: 800,
    cod_product: '1729dc75-cfea-4fd8-8170-53af59e1d3c6',
    emphasis: false,
    type: 'service',
    time: '180',
    short_description: `  
    <p>Orcamento da revisão sem custo.</p>
    <ul>
        <li><span>Elétrica</span></li>
        <li><span>Mecânica</span></li>
        <li><span>Freio</span></li>
        <li><span>Embreagem</span></li>
        <li><span>Motor</span></li>
    </ul> 

    <p>Em nossa oficina especializada em revisão de carros, oferecemos um serviço abrangente para garantir o desempenho e a segurança do seu veículo. Nossa equipe de mecânicos altamente qualificados realiza uma inspeção minuciosa de todos os componentes, incluindo motor, freios, suspensão e sistemas elétricos. Utilizamos equipamentos modernos e tecnologia de ponta para identificar e corrigir qualquer problema potencial antes que se torne uma preocupação maior. Priorizamos a transparência, fornecendo relatórios detalhados sobre o estado do veículo e aconselhando sobre quaisquer reparos necessários. Nosso objetivo é proporcionar tranquilidade aos clientes, assegurando que seus carros estejam em condições ideais de funcionamento. Garantimos qualidade, eficiência e confiabilidade em cada revisão realizada.</p>
    <p>Viage com segurança </p>
    `,
    slug: 'revisao-do-carro',
    categories: JSON.stringify([]),
    time_discount_id: null,
    description: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, lectus at sagittis lacinia, sem ex lobortis diam, interdum accumsan justo enim id sapien. Cras eget magna rutrum, dictum turpis eu, luctus ligula. Duis laoreet metus eu nulla rhoncus aliquam. Integer sagittis interdum sapien at tristique. Maecenas porttitor arcu eu nisi venenatis dapibus. Phasellus pulvinar maximus libero. Sed ac cursus magna. Nunc vitae odio iaculis, ornare erat id, interdum lacus. </p>
    <p>Morbi euismod laoreet nunc, eu auctor nisi pharetra sed. Pellentesque odio magna, scelerisque nec venenatis in, rhoncus nec lectus. Nunc posuere molestie leo quis vestibulum. Nunc aliquet lorem in massa laoreet molestie. Mauris est sapien, pharetra vel consequat semper, vulputate id augue. Etiam odio lectus, tincidunt id urna at, molestie finibus tellus. Pellentesque pharetra sed orci vel porttitor. Mauris eget viverra est, ut egestas elit. Nullam erat massa, sollicitudin ac erat vel, aliquet imperdiet libero. Nulla porttitor et dolor vel lobortis. Nam id tortor magna.</p>
    <p>Quisque id nisi arcu. In lacinia elit vitae auctor aliquet. Donec ultrices luctus ornare. Sed ultricies ultrices interdum. Proin dictum nisi lectus, vel auctor libero dictum non. Aliquam in mauris elementum, tristique nisi in, rutrum diam. Donec molestie, libero id molestie pretium, sem lacus tincidunt dolor, eget pharetra tellus metus eget quam. Ut molestie euismod risus. Fusce convallis lorem quis lectus varius aliquam. Pellentesque enim augue, lobortis imperdiet dolor sit amet, porta vulputate nulla. Ut malesuada, ex a finibus ornare, ipsum risus molestie urna, nec sodales ex erat nec leo. Mauris vehicula cursus nulla. Nullam tellus nunc, consectetur vel ullamcorper ac, posuere ac enim. Aliquam egestas purus in sapien feugiat, eu posuere lectus fringilla. In tempor lobortis ullamcorper. Aenean sit amet risus faucibus, efficitur felis sed, cursus lectus.</p>
    <p>Donec laoreet lacinia ligula, quis euismod massa. Praesent in felis id libero blandit vehicula eget a ante. Nam consequat ex a laoreet feugiat. Donec sit amet nibh volutpat, porttitor ex ut, euismod metus. Vestibulum in velit eu urna suscipit commodo a ut purus. Cras iaculis a massa at maximus. Integer venenatis est vitae nunc ullamcorper tincidunt. Phasellus ullamcorper mi purus, in consequat sem commodo vitae. Curabitur hendrerit pellentesque mi vel hendrerit. Quisque id venenatis arcu.</p>`,
  },
  {
    name: 'Corte de cabelo masculino',
    published: 'publish',
    visibility: 'public',
    mode_data: 'single',
    price: 45,
    old_price: 55,
    cod_product: '1729dc75-cfea-4fd8-8170-53af59e1d3c6',
    emphasis: false,
    type: 'service',
    time: '60',
    short_description: `  
      <p>Em nosso salão de beleza, oferecemos serviços especializados de cortes de cabelo masculinos para atender às tendências contemporâneas e estilos clássicos. Nossa equipe de cabeleireiros qualificados está sempre atualizada com as últimas técnicas de corte, garantindo resultados personalizados que realçam a individualidade de cada cliente. Utilizamos ferramentas de alta qualidade e produtos premium para garantir um acabamento impecável. Além dos cortes tradicionais, oferecemos consultoria personalizada para ajudar os clientes a escolherem o estilo que melhor se adapta ao seu tipo de cabelo e estilo de vida. Proporcionamos uma experiência de cuidado capilar completa, focada na satisfação e confiança de nossos clientes. </p>
    `,
    slug: 'revisao-do-carro',
    categories: JSON.stringify([]),
    time_discount_id: null,
    description: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, lectus at sagittis lacinia, sem ex lobortis diam, interdum accumsan justo enim id sapien. Cras eget magna rutrum, dictum turpis eu, luctus ligula. Duis laoreet metus eu nulla rhoncus aliquam. Integer sagittis interdum sapien at tristique. Maecenas porttitor arcu eu nisi venenatis dapibus. Phasellus pulvinar maximus libero. Sed ac cursus magna. Nunc vitae odio iaculis, ornare erat id, interdum lacus. </p>
    <p>Morbi euismod laoreet nunc, eu auctor nisi pharetra sed. Pellentesque odio magna, scelerisque nec venenatis in, rhoncus nec lectus. Nunc posuere molestie leo quis vestibulum. Nunc aliquet lorem in massa laoreet molestie. Mauris est sapien, pharetra vel consequat semper, vulputate id augue. Etiam odio lectus, tincidunt id urna at, molestie finibus tellus. Pellentesque pharetra sed orci vel porttitor. Mauris eget viverra est, ut egestas elit. Nullam erat massa, sollicitudin ac erat vel, aliquet imperdiet libero. Nulla porttitor et dolor vel lobortis. Nam id tortor magna.</p>
    <p>Quisque id nisi arcu. In lacinia elit vitae auctor aliquet. Donec ultrices luctus ornare. Sed ultricies ultrices interdum. Proin dictum nisi lectus, vel auctor libero dictum non. Aliquam in mauris elementum, tristique nisi in, rutrum diam. Donec molestie, libero id molestie pretium, sem lacus tincidunt dolor, eget pharetra tellus metus eget quam. Ut molestie euismod risus. Fusce convallis lorem quis lectus varius aliquam. Pellentesque enim augue, lobortis imperdiet dolor sit amet, porta vulputate nulla. Ut malesuada, ex a finibus ornare, ipsum risus molestie urna, nec sodales ex erat nec leo. Mauris vehicula cursus nulla. Nullam tellus nunc, consectetur vel ullamcorper ac, posuere ac enim. Aliquam egestas purus in sapien feugiat, eu posuere lectus fringilla. In tempor lobortis ullamcorper. Aenean sit amet risus faucibus, efficitur felis sed, cursus lectus.</p>
    <p>Donec laoreet lacinia ligula, quis euismod massa. Praesent in felis id libero blandit vehicula eget a ante. Nam consequat ex a laoreet feugiat. Donec sit amet nibh volutpat, porttitor ex ut, euismod metus. Vestibulum in velit eu urna suscipit commodo a ut purus. Cras iaculis a massa at maximus. Integer venenatis est vitae nunc ullamcorper tincidunt. Phasellus ullamcorper mi purus, in consequat sem commodo vitae. Curabitur hendrerit pellentesque mi vel hendrerit. Quisque id venenatis arcu.</p>`,
  },
  {
    name: 'Formatação de computador e notebook',
    published: 'publish',
    visibility: 'public',
    mode_data: 'multiple',
    price: 150,
    old_price: 180,
    cod_product: '1729dc75-cfea-4fd8-8170-53af59e1d3c6',
    emphasis: false,
    type: 'service',
    time: '60',
    short_description: `  
      <p>Oferecemos serviços abrangentes de formatação para computadores e notebooks, proporcionando uma revitalização eficiente e rápida. Nossa equipe especializada realiza a reinstalação cuidadosa de sistemas operacionais, garantindo um desempenho otimizado. Além disso, configuramos e instalamos programas essenciais para atender às suas necessidades específicas. Priorizamos a segurança dos dados, realizando backups meticulosos antes da formatação. Contamos com profissionais experientes que asseguram a integridade do hardware e a funcionalidade completa do sistema após o serviço. Oferecemos uma solução completa para garantir que seu computador ou notebook retorne ao seu máximo potencial. </p> 
      <ul>
        <li><span>Limpeza</span></li>
        <li><span>Reinstalação dos programas</span></li>
        <li><span>Instalação antivirus</span></li> 
      </ul>
    `,
    slug: 'formatacao-de-computador-e-notebook',
    categories: JSON.stringify([]),
    time_discount_id: null,
    description: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, lectus at sagittis lacinia, sem ex lobortis diam, interdum accumsan justo enim id sapien. Cras eget magna rutrum, dictum turpis eu, luctus ligula. Duis laoreet metus eu nulla rhoncus aliquam. Integer sagittis interdum sapien at tristique. Maecenas porttitor arcu eu nisi venenatis dapibus. Phasellus pulvinar maximus libero. Sed ac cursus magna. Nunc vitae odio iaculis, ornare erat id, interdum lacus. </p>
    <p>Morbi euismod laoreet nunc, eu auctor nisi pharetra sed. Pellentesque odio magna, scelerisque nec venenatis in, rhoncus nec lectus. Nunc posuere molestie leo quis vestibulum. Nunc aliquet lorem in massa laoreet molestie. Mauris est sapien, pharetra vel consequat semper, vulputate id augue. Etiam odio lectus, tincidunt id urna at, molestie finibus tellus. Pellentesque pharetra sed orci vel porttitor. Mauris eget viverra est, ut egestas elit. Nullam erat massa, sollicitudin ac erat vel, aliquet imperdiet libero. Nulla porttitor et dolor vel lobortis. Nam id tortor magna.</p>
    <p>Quisque id nisi arcu. In lacinia elit vitae auctor aliquet. Donec ultrices luctus ornare. Sed ultricies ultrices interdum. Proin dictum nisi lectus, vel auctor libero dictum non. Aliquam in mauris elementum, tristique nisi in, rutrum diam. Donec molestie, libero id molestie pretium, sem lacus tincidunt dolor, eget pharetra tellus metus eget quam. Ut molestie euismod risus. Fusce convallis lorem quis lectus varius aliquam. Pellentesque enim augue, lobortis imperdiet dolor sit amet, porta vulputate nulla. Ut malesuada, ex a finibus ornare, ipsum risus molestie urna, nec sodales ex erat nec leo. Mauris vehicula cursus nulla. Nullam tellus nunc, consectetur vel ullamcorper ac, posuere ac enim. Aliquam egestas purus in sapien feugiat, eu posuere lectus fringilla. In tempor lobortis ullamcorper. Aenean sit amet risus faucibus, efficitur felis sed, cursus lectus.</p>
    <p>Donec laoreet lacinia ligula, quis euismod massa. Praesent in felis id libero blandit vehicula eget a ante. Nam consequat ex a laoreet feugiat. Donec sit amet nibh volutpat, porttitor ex ut, euismod metus. Vestibulum in velit eu urna suscipit commodo a ut purus. Cras iaculis a massa at maximus. Integer venenatis est vitae nunc ullamcorper tincidunt. Phasellus ullamcorper mi purus, in consequat sem commodo vitae. Curabitur hendrerit pellentesque mi vel hendrerit. Quisque id venenatis arcu.</p>`,
  },
  {
    name: 'Instalação de sistema de vigilância',
    published: 'publish',
    visibility: 'public',
    mode_data: 'single',
    price: 1800,
    old_price: 2300,
    cod_product: '1729dc75-cfea-4fd8-8170-53af59e1d3c6',
    emphasis: false,
    type: 'service',
    time: '260',
    short_description: `  
      <p>Oferecemos serviços profissionais de instalação de sistemas de vigilância para proporcionar segurança e tranquilidade. Nossa equipe especializada utiliza tecnologia de ponta para a implementação de câmeras de vigilância estrategicamente posicionadas, garantindo uma cobertura abrangente. Priorizamos a integração eficiente do sistema para garantir monitoramento contínuo e oferecer soluções personalizadas para atender às necessidades específicas de segurança de nossos clientes. </p> `,
    slug: 'instalacao-de-sistema-de-vigilancia',
    categories: JSON.stringify([]),
    time_discount_id: null,
    description: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, lectus at sagittis lacinia, sem ex lobortis diam, interdum accumsan justo enim id sapien. Cras eget magna rutrum, dictum turpis eu, luctus ligula. Duis laoreet metus eu nulla rhoncus aliquam. Integer sagittis interdum sapien at tristique. Maecenas porttitor arcu eu nisi venenatis dapibus. Phasellus pulvinar maximus libero. Sed ac cursus magna. Nunc vitae odio iaculis, ornare erat id, interdum lacus. </p>
    <p>Morbi euismod laoreet nunc, eu auctor nisi pharetra sed. Pellentesque odio magna, scelerisque nec venenatis in, rhoncus nec lectus. Nunc posuere molestie leo quis vestibulum. Nunc aliquet lorem in massa laoreet molestie. Mauris est sapien, pharetra vel consequat semper, vulputate id augue. Etiam odio lectus, tincidunt id urna at, molestie finibus tellus. Pellentesque pharetra sed orci vel porttitor. Mauris eget viverra est, ut egestas elit. Nullam erat massa, sollicitudin ac erat vel, aliquet imperdiet libero. Nulla porttitor et dolor vel lobortis. Nam id tortor magna.</p>
    <p>Quisque id nisi arcu. In lacinia elit vitae auctor aliquet. Donec ultrices luctus ornare. Sed ultricies ultrices interdum. Proin dictum nisi lectus, vel auctor libero dictum non. Aliquam in mauris elementum, tristique nisi in, rutrum diam. Donec molestie, libero id molestie pretium, sem lacus tincidunt dolor, eget pharetra tellus metus eget quam. Ut molestie euismod risus. Fusce convallis lorem quis lectus varius aliquam. Pellentesque enim augue, lobortis imperdiet dolor sit amet, porta vulputate nulla. Ut malesuada, ex a finibus ornare, ipsum risus molestie urna, nec sodales ex erat nec leo. Mauris vehicula cursus nulla. Nullam tellus nunc, consectetur vel ullamcorper ac, posuere ac enim. Aliquam egestas purus in sapien feugiat, eu posuere lectus fringilla. In tempor lobortis ullamcorper. Aenean sit amet risus faucibus, efficitur felis sed, cursus lectus.</p>
    <p>Donec laoreet lacinia ligula, quis euismod massa. Praesent in felis id libero blandit vehicula eget a ante. Nam consequat ex a laoreet feugiat. Donec sit amet nibh volutpat, porttitor ex ut, euismod metus. Vestibulum in velit eu urna suscipit commodo a ut purus. Cras iaculis a massa at maximus. Integer venenatis est vitae nunc ullamcorper tincidunt. Phasellus ullamcorper mi purus, in consequat sem commodo vitae. Curabitur hendrerit pellentesque mi vel hendrerit. Quisque id venenatis arcu.</p>`,
  },
  {
    name: 'Maquiagem profissional',
    published: 'publish',
    visibility: 'public',
    mode_data: 'single',
    price: 320,
    old_price: 200,
    cod_product: '1729dc75-cfea-4fd8-8170-53af59e1d3c6',
    emphasis: false,
    type: 'service',
    time: '120',
    short_description: `  
      <p>Oferecemos serviços de maquiagem profissional para realçar a beleza única de cada cliente. Nossa equipe de maquiadores qualificados utiliza produtos premium e técnicas especializadas para criar looks personalizados, seja para eventos especiais, fotos ou produções artísticas. Priorizamos a satisfação do cliente, garantindo uma aplicação impecável que destaca traços naturais e reflete a visão individual de beleza.</p> `,
    slug: 'instalacao-de-sistema-de-vigilancia',
    categories: JSON.stringify([]),
    time_discount_id: null,
    description: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, lectus at sagittis lacinia, sem ex lobortis diam, interdum accumsan justo enim id sapien. Cras eget magna rutrum, dictum turpis eu, luctus ligula. Duis laoreet metus eu nulla rhoncus aliquam. Integer sagittis interdum sapien at tristique. Maecenas porttitor arcu eu nisi venenatis dapibus. Phasellus pulvinar maximus libero. Sed ac cursus magna. Nunc vitae odio iaculis, ornare erat id, interdum lacus. </p>
    <p>Morbi euismod laoreet nunc, eu auctor nisi pharetra sed. Pellentesque odio magna, scelerisque nec venenatis in, rhoncus nec lectus. Nunc posuere molestie leo quis vestibulum. Nunc aliquet lorem in massa laoreet molestie. Mauris est sapien, pharetra vel consequat semper, vulputate id augue. Etiam odio lectus, tincidunt id urna at, molestie finibus tellus. Pellentesque pharetra sed orci vel porttitor. Mauris eget viverra est, ut egestas elit. Nullam erat massa, sollicitudin ac erat vel, aliquet imperdiet libero. Nulla porttitor et dolor vel lobortis. Nam id tortor magna.</p>
    <p>Quisque id nisi arcu. In lacinia elit vitae auctor aliquet. Donec ultrices luctus ornare. Sed ultricies ultrices interdum. Proin dictum nisi lectus, vel auctor libero dictum non. Aliquam in mauris elementum, tristique nisi in, rutrum diam. Donec molestie, libero id molestie pretium, sem lacus tincidunt dolor, eget pharetra tellus metus eget quam. Ut molestie euismod risus. Fusce convallis lorem quis lectus varius aliquam. Pellentesque enim augue, lobortis imperdiet dolor sit amet, porta vulputate nulla. Ut malesuada, ex a finibus ornare, ipsum risus molestie urna, nec sodales ex erat nec leo. Mauris vehicula cursus nulla. Nullam tellus nunc, consectetur vel ullamcorper ac, posuere ac enim. Aliquam egestas purus in sapien feugiat, eu posuere lectus fringilla. In tempor lobortis ullamcorper. Aenean sit amet risus faucibus, efficitur felis sed, cursus lectus.</p>
    <p>Donec laoreet lacinia ligula, quis euismod massa. Praesent in felis id libero blandit vehicula eget a ante. Nam consequat ex a laoreet feugiat. Donec sit amet nibh volutpat, porttitor ex ut, euismod metus. Vestibulum in velit eu urna suscipit commodo a ut purus. Cras iaculis a massa at maximus. Integer venenatis est vitae nunc ullamcorper tincidunt. Phasellus ullamcorper mi purus, in consequat sem commodo vitae. Curabitur hendrerit pellentesque mi vel hendrerit. Quisque id venenatis arcu.</p>`,
  },
  {
    name: 'Dedetização domiciliar e empresarial',
    published: 'publish',
    visibility: 'public',
    mode_data: 'single',
    price: 1200,
    cod_product: '1729dc75-cfea-4fd8-8170-53af59e1d3c6',
    emphasis: false,
    type: 'service',
    time: '800',
    short_description: `  
      <p>Serviços especializados de dedetização domiciliar para eliminar pragas indesejadas e proteger o seu lar. Nossa equipe utiliza produtos seguros e eficazes, garantindo um ambiente livre de insetos e roedores. Priorizamos a segurança da sua família, proporcionando soluções personalizadas para manter sua casa livre de pragas durante todo o ano.</p> `,
    slug: 'dedetizacao-domiciliar-e-empresarial',
    categories: JSON.stringify([]),
    time_discount_id: null,
    description: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, lectus at sagittis lacinia, sem ex lobortis diam, interdum accumsan justo enim id sapien. Cras eget magna rutrum, dictum turpis eu, luctus ligula. Duis laoreet metus eu nulla rhoncus aliquam. Integer sagittis interdum sapien at tristique. Maecenas porttitor arcu eu nisi venenatis dapibus. Phasellus pulvinar maximus libero. Sed ac cursus magna. Nunc vitae odio iaculis, ornare erat id, interdum lacus. </p>
    <p>Morbi euismod laoreet nunc, eu auctor nisi pharetra sed. Pellentesque odio magna, scelerisque nec venenatis in, rhoncus nec lectus. Nunc posuere molestie leo quis vestibulum. Nunc aliquet lorem in massa laoreet molestie. Mauris est sapien, pharetra vel consequat semper, vulputate id augue. Etiam odio lectus, tincidunt id urna at, molestie finibus tellus. Pellentesque pharetra sed orci vel porttitor. Mauris eget viverra est, ut egestas elit. Nullam erat massa, sollicitudin ac erat vel, aliquet imperdiet libero. Nulla porttitor et dolor vel lobortis. Nam id tortor magna.</p>
    <p>Quisque id nisi arcu. In lacinia elit vitae auctor aliquet. Donec ultrices luctus ornare. Sed ultricies ultrices interdum. Proin dictum nisi lectus, vel auctor libero dictum non. Aliquam in mauris elementum, tristique nisi in, rutrum diam. Donec molestie, libero id molestie pretium, sem lacus tincidunt dolor, eget pharetra tellus metus eget quam. Ut molestie euismod risus. Fusce convallis lorem quis lectus varius aliquam. Pellentesque enim augue, lobortis imperdiet dolor sit amet, porta vulputate nulla. Ut malesuada, ex a finibus ornare, ipsum risus molestie urna, nec sodales ex erat nec leo. Mauris vehicula cursus nulla. Nullam tellus nunc, consectetur vel ullamcorper ac, posuere ac enim. Aliquam egestas purus in sapien feugiat, eu posuere lectus fringilla. In tempor lobortis ullamcorper. Aenean sit amet risus faucibus, efficitur felis sed, cursus lectus.</p>
    <p>Donec laoreet lacinia ligula, quis euismod massa. Praesent in felis id libero blandit vehicula eget a ante. Nam consequat ex a laoreet feugiat. Donec sit amet nibh volutpat, porttitor ex ut, euismod metus. Vestibulum in velit eu urna suscipit commodo a ut purus. Cras iaculis a massa at maximus. Integer venenatis est vitae nunc ullamcorper tincidunt. Phasellus ullamcorper mi purus, in consequat sem commodo vitae. Curabitur hendrerit pellentesque mi vel hendrerit. Quisque id venenatis arcu.</p>`,
  },
  {
    name: 'Clareamento dental',
    published: 'publish',
    visibility: 'public',
    mode_data: 'single',
    price: 1200,
    cod_product: '1729dc75-cfea-4fd8-8170-53af59e1d3c6',
    emphasis: false,
    type: 'service',
    time: '340',
    short_description: `  
      <p>Proporcionamos serviços de clareamento dental para transformar e realçar o seu sorriso. Utilizando técnicas avançadas e produtos de qualidade, nossa equipe especializada oferece um clareamento seguro e eficaz. Garantimos resultados visíveis, promovendo um sorriso mais branco e luminoso, respeitando sempre a saúde bucal dos nossos pacientes.</p> `,
    slug: 'clareamento-dental',
    categories: JSON.stringify([]),
    time_discount_id: null,
    description: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, lectus at sagittis lacinia, sem ex lobortis diam, interdum accumsan justo enim id sapien. Cras eget magna rutrum, dictum turpis eu, luctus ligula. Duis laoreet metus eu nulla rhoncus aliquam. Integer sagittis interdum sapien at tristique. Maecenas porttitor arcu eu nisi venenatis dapibus. Phasellus pulvinar maximus libero. Sed ac cursus magna. Nunc vitae odio iaculis, ornare erat id, interdum lacus. </p>
    <p>Morbi euismod laoreet nunc, eu auctor nisi pharetra sed. Pellentesque odio magna, scelerisque nec venenatis in, rhoncus nec lectus. Nunc posuere molestie leo quis vestibulum. Nunc aliquet lorem in massa laoreet molestie. Mauris est sapien, pharetra vel consequat semper, vulputate id augue. Etiam odio lectus, tincidunt id urna at, molestie finibus tellus. Pellentesque pharetra sed orci vel porttitor. Mauris eget viverra est, ut egestas elit. Nullam erat massa, sollicitudin ac erat vel, aliquet imperdiet libero. Nulla porttitor et dolor vel lobortis. Nam id tortor magna.</p>
    <p>Quisque id nisi arcu. In lacinia elit vitae auctor aliquet. Donec ultrices luctus ornare. Sed ultricies ultrices interdum. Proin dictum nisi lectus, vel auctor libero dictum non. Aliquam in mauris elementum, tristique nisi in, rutrum diam. Donec molestie, libero id molestie pretium, sem lacus tincidunt dolor, eget pharetra tellus metus eget quam. Ut molestie euismod risus. Fusce convallis lorem quis lectus varius aliquam. Pellentesque enim augue, lobortis imperdiet dolor sit amet, porta vulputate nulla. Ut malesuada, ex a finibus ornare, ipsum risus molestie urna, nec sodales ex erat nec leo. Mauris vehicula cursus nulla. Nullam tellus nunc, consectetur vel ullamcorper ac, posuere ac enim. Aliquam egestas purus in sapien feugiat, eu posuere lectus fringilla. In tempor lobortis ullamcorper. Aenean sit amet risus faucibus, efficitur felis sed, cursus lectus.</p>
    <p>Donec laoreet lacinia ligula, quis euismod massa. Praesent in felis id libero blandit vehicula eget a ante. Nam consequat ex a laoreet feugiat. Donec sit amet nibh volutpat, porttitor ex ut, euismod metus. Vestibulum in velit eu urna suscipit commodo a ut purus. Cras iaculis a massa at maximus. Integer venenatis est vitae nunc ullamcorper tincidunt. Phasellus ullamcorper mi purus, in consequat sem commodo vitae. Curabitur hendrerit pellentesque mi vel hendrerit. Quisque id venenatis arcu.</p>`,
  },
  {
    name: 'Jardinagem',
    published: 'publish',
    visibility: 'public',
    mode_data: 'single',
    price: 1400,
    cod_product: '1729dc75-cfea-4fd8-8170-53af59e1d3c6',
    emphasis: false,
    type: 'service',
    time: '420',
    short_description: `  
      <p>Realiza implantação, criação e manutenção de jardins, poda de árvores, cuidado de flores de ambiente interno e externo e corte de grama. Aplica defensivos agrícolas contra insetos e pragas em árvores e plantas, operando equipamentos e máquinas de pequeno porte específicas de jardinagem.</p> `,
    slug: 'jardinagem',
    categories: JSON.stringify([]),
    time_discount_id: null,
    description: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, lectus at sagittis lacinia, sem ex lobortis diam, interdum accumsan justo enim id sapien. Cras eget magna rutrum, dictum turpis eu, luctus ligula. Duis laoreet metus eu nulla rhoncus aliquam. Integer sagittis interdum sapien at tristique. Maecenas porttitor arcu eu nisi venenatis dapibus. Phasellus pulvinar maximus libero. Sed ac cursus magna. Nunc vitae odio iaculis, ornare erat id, interdum lacus. </p>
    <p>Morbi euismod laoreet nunc, eu auctor nisi pharetra sed. Pellentesque odio magna, scelerisque nec venenatis in, rhoncus nec lectus. Nunc posuere molestie leo quis vestibulum. Nunc aliquet lorem in massa laoreet molestie. Mauris est sapien, pharetra vel consequat semper, vulputate id augue. Etiam odio lectus, tincidunt id urna at, molestie finibus tellus. Pellentesque pharetra sed orci vel porttitor. Mauris eget viverra est, ut egestas elit. Nullam erat massa, sollicitudin ac erat vel, aliquet imperdiet libero. Nulla porttitor et dolor vel lobortis. Nam id tortor magna.</p>
    <p>Quisque id nisi arcu. In lacinia elit vitae auctor aliquet. Donec ultrices luctus ornare. Sed ultricies ultrices interdum. Proin dictum nisi lectus, vel auctor libero dictum non. Aliquam in mauris elementum, tristique nisi in, rutrum diam. Donec molestie, libero id molestie pretium, sem lacus tincidunt dolor, eget pharetra tellus metus eget quam. Ut molestie euismod risus. Fusce convallis lorem quis lectus varius aliquam. Pellentesque enim augue, lobortis imperdiet dolor sit amet, porta vulputate nulla. Ut malesuada, ex a finibus ornare, ipsum risus molestie urna, nec sodales ex erat nec leo. Mauris vehicula cursus nulla. Nullam tellus nunc, consectetur vel ullamcorper ac, posuere ac enim. Aliquam egestas purus in sapien feugiat, eu posuere lectus fringilla. In tempor lobortis ullamcorper. Aenean sit amet risus faucibus, efficitur felis sed, cursus lectus.</p>
    <p>Donec laoreet lacinia ligula, quis euismod massa. Praesent in felis id libero blandit vehicula eget a ante. Nam consequat ex a laoreet feugiat. Donec sit amet nibh volutpat, porttitor ex ut, euismod metus. Vestibulum in velit eu urna suscipit commodo a ut purus. Cras iaculis a massa at maximus. Integer venenatis est vitae nunc ullamcorper tincidunt. Phasellus ullamcorper mi purus, in consequat sem commodo vitae. Curabitur hendrerit pellentesque mi vel hendrerit. Quisque id venenatis arcu.</p>`,
  },
  {
    name: 'Aluguel de carro de luxo',
    published: 'publish',
    visibility: 'public',
    mode_data: 'single',
    price: 800,
    cod_product: '1729dc75-cfea-4fd8-8170-53af59e1d3c6',
    emphasis: false,
    type: 'service',
    time: '420',
    short_description: `  
      <p>Oferecemos serviços de aluguel de carros de luxo para clientes que buscam uma experiência de condução premium. Nossa frota inclui veículos de marcas renomadas, proporcionando conforto e estilo incomparáveis. Com opções flexíveis de aluguel, garantimos que você desfrute de uma jornada sofisticada e inesquecível ao volante de um carro de luxo.</p> `,
    slug: 'aluguel-de-carro-de-luxo',
    categories: JSON.stringify([]),
    time_discount_id: null,
    description: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, lectus at sagittis lacinia, sem ex lobortis diam, interdum accumsan justo enim id sapien. Cras eget magna rutrum, dictum turpis eu, luctus ligula. Duis laoreet metus eu nulla rhoncus aliquam. Integer sagittis interdum sapien at tristique. Maecenas porttitor arcu eu nisi venenatis dapibus. Phasellus pulvinar maximus libero. Sed ac cursus magna. Nunc vitae odio iaculis, ornare erat id, interdum lacus. </p>
    <p>Morbi euismod laoreet nunc, eu auctor nisi pharetra sed. Pellentesque odio magna, scelerisque nec venenatis in, rhoncus nec lectus. Nunc posuere molestie leo quis vestibulum. Nunc aliquet lorem in massa laoreet molestie. Mauris est sapien, pharetra vel consequat semper, vulputate id augue. Etiam odio lectus, tincidunt id urna at, molestie finibus tellus. Pellentesque pharetra sed orci vel porttitor. Mauris eget viverra est, ut egestas elit. Nullam erat massa, sollicitudin ac erat vel, aliquet imperdiet libero. Nulla porttitor et dolor vel lobortis. Nam id tortor magna.</p>
    <p>Quisque id nisi arcu. In lacinia elit vitae auctor aliquet. Donec ultrices luctus ornare. Sed ultricies ultrices interdum. Proin dictum nisi lectus, vel auctor libero dictum non. Aliquam in mauris elementum, tristique nisi in, rutrum diam. Donec molestie, libero id molestie pretium, sem lacus tincidunt dolor, eget pharetra tellus metus eget quam. Ut molestie euismod risus. Fusce convallis lorem quis lectus varius aliquam. Pellentesque enim augue, lobortis imperdiet dolor sit amet, porta vulputate nulla. Ut malesuada, ex a finibus ornare, ipsum risus molestie urna, nec sodales ex erat nec leo. Mauris vehicula cursus nulla. Nullam tellus nunc, consectetur vel ullamcorper ac, posuere ac enim. Aliquam egestas purus in sapien feugiat, eu posuere lectus fringilla. In tempor lobortis ullamcorper. Aenean sit amet risus faucibus, efficitur felis sed, cursus lectus.</p>
    <p>Donec laoreet lacinia ligula, quis euismod massa. Praesent in felis id libero blandit vehicula eget a ante. Nam consequat ex a laoreet feugiat. Donec sit amet nibh volutpat, porttitor ex ut, euismod metus. Vestibulum in velit eu urna suscipit commodo a ut purus. Cras iaculis a massa at maximus. Integer venenatis est vitae nunc ullamcorper tincidunt. Phasellus ullamcorper mi purus, in consequat sem commodo vitae. Curabitur hendrerit pellentesque mi vel hendrerit. Quisque id venenatis arcu.</p>`,
  },
]

const totalImagesByService: number[] = [3, 2, 3, 1, 2, 3, 2, 2, 2, 2] // 10

export const servicesImages = totalImagesByService.map((t) =>
  Array.from({ length: t }, (_, i) => i),
)

export function archivesServicesData(index: number, id: string) {
  return servicesImages[index].map((_, idx) => {
    const loopNumber = idx + 1
    return {
      name: `example-sc${index + 1}-${loopNumber}.jpg`,
      reference_id: id,
      origin_target: 'service',
      size: '99999',
      type: 'image/jpeg',
      is_primary: false,
    }
  })
}

export const servicesAttributesData: ICreateProductAttributesDTO[] = [
  {
    name: 'Oleo', // Troca de oleo 0
    product_id: '',
    options: JSON.stringify([
      {
        label: 'premium',
        value: 'premium',
      },
      {
        label: 'comum',
        value: 'comum',
      },
    ]),
  },
  {
    name: 'Programas', // formatacao 3
    product_id: '',
    options: JSON.stringify([
      {
        label: 'office2024',
        value: 'office2024',
      },
      {
        label: 'office2020',
        value: 'office2020',
      },
    ]),
  },
  {
    name: 'Revisão', // Revisao de carro 1
    product_id: '',
    options: JSON.stringify([
      {
        label: 'preventiva',
        value: 'preventiva',
      },
      {
        label: 'preditiva',
        value: 'preditiva',
      },
      {
        label: 'corretiva',
        value: 'corretiva',
      },
    ]),
  },
]

export const servicesVariationsData: ICreateProductVariationsDTO[] = [
  {
    price: 350, // oleo
    quantity: 1,
    name: 'premium',
    actived: true,
    sku: 'SDD',
    product_attr_id: '',
  },
  {
    price: 150, // oleo
    quantity: 1,
    name: 'comum',
    actived: true,
    sku: 'SDD',
    product_attr_id: '',
  },
  {
    price: 240, // formatacao
    quantity: 1,
    name: 'computador',
    actived: true,
    sku: 'SDD',
    product_attr_id: '',
  },
  {
    price: 200, // formatacao
    quantity: 1,
    name: 'notebook',
    actived: true,
    sku: 'SDD',
    product_attr_id: '',
  },
  {
    price: 800, // revisao
    quantity: 1,
    name: 'preventiva',
    actived: true,
    sku: 'SDD',
    product_attr_id: '',
  },
  {
    price: 900, // revisao
    quantity: 1,
    name: 'preditiva',
    actived: true,
    sku: 'SDD',
    product_attr_id: '',
  },
  {
    price: 1200, // revisao
    quantity: 1,
    name: 'corretiva',
    actived: true,
    sku: 'SDD',
    product_attr_id: '',
  },
]

export const archiveServicesVariantsImagesData = [
  {
    name: `example-sc-var1-1.jpg`,
    reference_id: '',
    origin_target: 'service',
    size: '99999',
    type: 'image/jpeg',
    is_primary: false,
  },
  {
    name: `example-sc-var1-2.jpg`,
    reference_id: '',
    origin_target: 'service',
    size: '99999',
    type: 'image/jpeg',
    is_primary: false,
  },
  {
    name: `example-sc-var2-1.jpg`,
    reference_id: '',
    origin_target: 'service',
    size: '99999',
    type: 'image/jpeg',
    is_primary: false,
  },
  {
    name: `example-sc-var2-2.jpg`,
    reference_id: '',
    origin_target: 'service',
    size: '99999',
    type: 'image/jpeg',
    is_primary: false,
  },
  {
    name: `example-sc-var3-1.jpg`,
    reference_id: '',
    origin_target: 'service',
    size: '99999',
    type: 'image/jpeg',
    is_primary: false,
  },
  {
    name: `example-sc-var3-2.jpg`,
    reference_id: '',
    origin_target: 'service',
    size: '99999',
    type: 'image/jpeg',
    is_primary: false,
  },
  {
    name: `example-sc-var3-3.jpg`,
    reference_id: '',
    origin_target: 'service',
    size: '99999',
    type: 'image/jpeg',
    is_primary: false,
  },
]
