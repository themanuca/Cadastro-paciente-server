const Paciente = require("../model/pacitente.model");


module.exports = {
    async find(req, res){
         const paciente = await Paciente.find();
        res.json(paciente);
    },

    async create(req, res){
      
        const {
            nome,
            nascimento,
            cpf,
            sexo,
            endereco,
            status
            } = req.body
            
            if(!nome || !nascimento || !cpf || !sexo || !status) {
                return  await res.status(405).json({msg:"Preencha todos os requisitos !"})
            }
            
            let verficaPaciente = await Paciente.findOne({cpf}) //verificando se o CPF já está cadastrado

            if(verficaPaciente){
                return res.status(405).json({msg:"CPF já cadastrado !"})

            }else{

                let dadosPaciente = {}
                dadosPaciente = {
                    nome,
                    nascimento,
                    cpf,
                    sexo,
                    endereco,
                    status
                };

                try{
                    var CadastraPaciente = await Paciente.create(dadosPaciente);
                    
                    return res.status(200).json({msg:"Paciente Registrado com Sucesso"});
                
                }catch(error){

                   res.status(500).json({msg:"Erro no servidor"})
                }


            }
        
    },



    async detail(req, res){
        const {_id} = await req.params;
        const paciente = await Paciente.findOne({_id});
        res.json(paciente);
    },


    async delete(req,res){
        const{_id} = await req.params;
        const paciente = await Paciente.findByIdAndDelete({_id});

        return res.json(paciente);
    },

    async update(req, res){
        const {
            _id,
            nome,
            nascimento,
            cpf,
            sexo,
            endereco,
            status
            } = req.body;

            dadosPaciente = {
                nome,
                nascimento,
                cpf,
                sexo,
                endereco,
                status
            };

            const paciente = await Paciente.findByIdAndUpdate({_id}, dadosPaciente, {new:true});

            return res.status(200).json({msg:"Paciente Atualizado com Sucesso"});


    }
}