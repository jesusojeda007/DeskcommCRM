/**
 * Os textos das telas que a equipe usa todo dia.
 *
 * ─── A regra de ouro deste arquivo ─────────────────────────────────────────
 *
 * A CHAVE é o texto em português. Não `inbox.filtro.todas`, não `INBOX_ALL`.
 *
 * Duas razões, e as duas doem quando se descobre tarde:
 *
 *   1. Quem lê o componente vê a frase, não um código. `t("Todas as tags")`
 *      continua legível; `t("inbox.tags.all")` obriga a abrir outro arquivo
 *      para saber o que a tela diz.
 *   2. Falta de tradução DEGRADA para português em vez de mostrar a chave. Um
 *      `t("Assumir")` sem entrada em espanhol devolve "Assumir" — feio, mas
 *      compreensível. Com chave simbólica devolveria `inbox.claim`, que não é
 *      nada para ninguém.
 *
 * ─── Parcial, e de propósito ───────────────────────────────────────────────
 *
 * Só as telas do dia a dia. Traduzir as 229 telas de uma vez é um projeto, e um
 * projeto entregue pela metade deixa a interface em dois idiomas ao mesmo
 * tempo. O que não está aqui aparece em português, que é o comportamento de
 * antes desta feature — nunca pior.
 */
import type { Idioma } from "./idiomas";

/** `pt-BR` não aparece: é a chave. Só o que DIFERE precisa de linha. */
type Traducoes = Record<string, Partial<Record<Exclude<Idioma, "pt-BR">, string>>>;

export const DICIONARIO: Traducoes = {
  // ─── Navegação (a barra lateral, presente em toda tela) ───
  Inbox: { es: "Inbox" },
  Radar: { es: "Radar" },
  "Respostas rápidas": { es: "Respuestas rápidas" },
  Kanban: { es: "Kanban" },
  Contatos: { es: "Contactos" },
  Funis: { es: "Embudos" },
  Agentes: { es: "Agentes" },
  "Follow-ups": { es: "Seguimientos" },
  Roteadores: { es: "Enrutadores" },
  "Ver tudo em IA": { es: "Ver todo en IA" },
  Conexões: { es: "Conexiones" },
  Webhooks: { es: "Webhooks" },
  Desempenho: { es: "Rendimiento" },
  "Evolução da IA": { es: "Evolución de la IA" },
  "Audit Log": { es: "Registro de auditoría" },
  Configurações: { es: "Configuración" },
  Recolher: { es: "Contraer" },
  Buscar: { es: "Buscar" },

  // ─── Inbox: filtros e lista ───
  "Buscar mensagens…": { es: "Buscar mensajes…" },
  "Todos os números": { es: "Todos los números" },
  "Todas as tags": { es: "Todas las etiquetas" },
  "Apenas não lidos": { es: "Solo no leídos" },
  Fila: { es: "Cola" },
  Minhas: { es: "Mías" },
  Todas: { es: "Todas" },
  Fechadas: { es: "Cerradas" },
  IA: { es: "IA" },
  "Sem mensagens": { es: "Sin mensajes" },
  "Nenhuma conversa": { es: "Ninguna conversación" },

  // ─── Inbox: cabeçalho e ações da conversa ───
  Assumir: { es: "Asumir" },
  Liberar: { es: "Liberar" },
  Transferir: { es: "Transferir" },
  Lembrar: { es: "Recordar" },
  Fechar: { es: "Cerrar" },
  "Devolver ao automático": { es: "Devolver al automático" },
  Aberta: { es: "Abierta" },
  Fechada: { es: "Cerrada" },
  "Em atendimento": { es: "En atención" },
  "Aguardando atendente": { es: "Esperando agente" },
  "Automático pausado": { es: "Automático pausado" },
  "Ver contato": { es: "Ver contacto" },

  // ─── Inbox: composer ───
  Responder: { es: "Responder" },
  "Nota interna": { es: "Nota interna" },
  "Escreva uma mensagem…": { es: "Escribí un mensaje…" },
  "Escreva uma nota interna… (só o time vê)": {
    es: "Escribí una nota interna… (solo la ve el equipo)",
  },
  Enviar: { es: "Enviar" },
  "Enviar modelo": { es: "Enviar plantilla" },
  "Escolha um modelo aprovado…": { es: "Elegí una plantilla aprobada…" },

  // ─── Painel do contato ───
  CONTATO: { es: "CONTACTO" },
  "TAGS DA CONVERSA": { es: "ETIQUETAS DE LA CONVERSACIÓN" },
  "DEMANDAS ABERTAS": { es: "PEDIDOS ABIERTOS" },
  "LEADS RECENTES": { es: "LEADS RECIENTES" },
  "PEDIDOS RECENTES": { es: "PEDIDOS RECIENTES" },
  ATIVIDADE: { es: "ACTIVIDAD" },
  "Sem tags.": { es: "Sin etiquetas." },
  "Sem leads.": { es: "Sin leads." },
  "Sem pedidos.": { es: "Sin pedidos." },
  "Sem atividade.": { es: "Sin actividad." },
  "Nova tag…": { es: "Nueva etiqueta…" },
  "Sem próximo passo definido": { es: "Sin próximo paso definido" },
  "Marcar próximo passo": { es: "Marcar próximo paso" },
  Lead: { es: "Lead" },
  Tag: { es: "Etiqueta" },

  // ─── Kanban ───
  "Apenas atrasados": { es: "Solo atrasados" },
  "Sem responsável": { es: "Sin responsable" },
  "Editar campos": { es: "Editar campos" },
  "Linha do tempo": { es: "Línea de tiempo" },
  "DADOS DO NEGÓCIO": { es: "DATOS DEL NEGOCIO" },
  Título: { es: "Título" },
  Descrição: { es: "Descripción" },
  "Fechamento previsto": { es: "Cierre previsto" },
  "Tags (separadas por vírgula)": { es: "Etiquetas (separadas por coma)" },
  Salvar: { es: "Guardar" },
  vazio: { es: "vacío" },
  "Abrir conversa no Inbox": { es: "Abrir conversación en el Inbox" },

  // ─── Contatos ───
  "Buscar contatos…": { es: "Buscar contactos…" },
  Nome: { es: "Nombre" },
  Telefone: { es: "Teléfono" },
  "Nenhum contato": { es: "Ningún contacto" },
  Bloqueado: { es: "Bloqueado" },

  // ─── Conexões ───
  "Números por QR": { es: "Números por QR" },
  "API Oficial (Meta)": { es: "API Oficial (Meta)" },
  "Provedor parceiro": { es: "Proveedor asociado" },
  Conexão: { es: "Conexión" },
  "Modelos do parceiro": { es: "Plantillas del asociado" },
  "Templates da Meta": { es: "Plantillas de Meta" },
  Sincronizar: { es: "Sincronizar" },
  "Criar modelo": { es: "Crear plantilla" },
  Cancelar: { es: "Cancelar" },
  "Enviar para revisão": { es: "Enviar a revisión" },
  Reconectar: { es: "Reconectar" },
  Conectar: { es: "Conectar" },
  Desconectar: { es: "Desconectar" },
  "Fuso horário da janela": { es: "Huso horario de la ventana" },

  // ─── Estados e avisos que aparecem em várias telas ───
  "Carregando…": { es: "Cargando…" },
  "Nenhum resultado": { es: "Ningún resultado" },
  Erro: { es: "Error" },
  Excluir: { es: "Eliminar" },
  Editar: { es: "Editar" },
  Voltar: { es: "Volver" },

  // ─── Kanban ───
  "A sugestão vence em {resta}": { es: "La sugerencia vence en {resta}" },
  Abertos: { es: "Abiertos" },
  "Abrir esta conversa no Inbox": { es: "Abrir esta conversación en el Inbox" },
  Adicionar: { es: "Agregar" },
  Agente: { es: "Agente" },
  Aprovar: { es: "Aprobar" },
  "Aprovar: {label}": { es: "Aprobar: {label}" },
  "Arquivar «{nome}»? Ele sai desta lista e para de receber negócio novo. O histórico continua guardado, e nada é apagado.": {
    es: "¿Archivar «{nome}»? Sale de esta lista y deja de recibir negocio nuevo. El historial se conserva, y nada se borra.",
  },
  "Atribuir a…": { es: "Asignar a…" },
  "Atualize os campos. Mover de etapa ou marcar ganho/perdido tem opções próprias.": {
    es: "Actualizá los campos. Mover de etapa o marcar como ganado/perdido tiene opciones propias.",
  },
  "Ações do lead": { es: "Acciones del lead" },
  "Buscar por título…": { es: "Buscar por título…" },
  "Cancelado pela loja": { es: "Cancelado por la tienda" },
  "Cancelado pelo cliente": { es: "Cancelado por el cliente" },
  "Carregando a linha do tempo…": { es: "Cargando la línea de tiempo…" },
  "Cliente solicitou cancelamento": { es: "Cliente solicitó la cancelación" },
  Confirmar: { es: "Confirmar" },
  "Contexto, observações, links…": { es: "Contexto, observaciones, links…" },
  "Criando…": { es: "Creando…" },
  "Criar funil": { es: "Crear embudo" },
  "Criar lead": { es: "Crear lead" },
  "Criar meu primeiro funil": { es: "Crear mi primer embudo" },
  "Crie um lead manualmente neste pipeline.": { es: "Creá un lead manualmente en este pipeline." },
  "Dados do negócio": { es: "Datos del negocio" },
  "Descer «{nome}» na lista": { es: "Bajar «{nome}» en la lista" },
  "Detalhe (opcional)": { es: "Detalle (opcional)" },
  "Editar lead": { es: "Editar lead" },
  Encerrar: { es: "Finalizar" },
  "Encerrar: não retomar este negócio": { es: "Finalizar: no retomar este negocio" },
  "Erro ao carregar pipeline:": { es: "Error al cargar el pipeline:" },
  "Esta ação remove os leads selecionados. Não pode ser desfeita.": {
    es: "Esta acción elimina los leads seleccionados. No se puede deshacer.",
  },
  "Este negócio parou de responder": { es: "Este negocio dejó de responder" },
  Etapa: { es: "Etapa" },
  Eu: { es: "Yo" },
  "Ex: Cliente desistiu por X motivo": { es: "Ej: Cliente desistió por X motivo" },
  "Ex: Pedido Maria — combo presente": { es: "Ej: Pedido María — combo regalo" },
  "Excluir de vez": { es: "Eliminar definitivamente" },
  "Excluir {n} lead(s)?": { es: "¿Eliminar {n} lead(s)?" },
  "Falha ao carregar o board.": { es: "Falló la carga del board." },
  "Falha no pagamento": { es: "Falla en el pago" },
  Ganhos: { es: "Ganados" },
  Ignorar: { es: "Ignorar" },
  "Ignorar: {label}": { es: "Ignorar: {label}" },
  "Informe o motivo. Essa informação ajuda a melhorar o funil.": {
    es: "Indicá el motivo. Esta información ayuda a mejorar el embudo.",
  },
  "Lead atualizado": { es: "Lead actualizado" },
  "Lead criado": { es: "Lead creado" },
  "Lead: {titulo}": { es: "Lead: {titulo}" },
  "Marcar como ganho": { es: "Marcar como ganado" },
  "Marcar como perdido": { es: "Marcar como perdido" },
  Motivo: { es: "Motivo" },
  "Mover para…": { es: "Mover a…" },
  "Nada aconteceu com este negócio ainda.": { es: "Todavía no pasó nada con este negocio." },
  "Nenhum lead nesta pipeline ainda.": { es: "Todavía no hay ningún lead en este pipeline." },
  "Nome do funil — ex.: Consultas, Obras, Matrículas": {
    es: "Nombre del embudo — ej.: Consultas, Obras, Matrículas",
  },
  "Nome do novo funil": { es: "Nombre del nuevo embudo" },
  "Novo Lead": { es: "Nuevo lead" },
  "Novo funil": { es: "Nuevo embudo" },
  "Novo nome de «{nome}»": { es: "Nuevo nombre de «{nome}»" },
  "Não consegui carregar a linha do tempo. Tente de novo em instantes.": {
    es: "No pude cargar la línea de tiempo. Probá de nuevo en un momento.",
  },
  "Não consegui completar essa ação. Tente de novo.": { es: "No pude completar esa acción. Probá de nuevo." },
  "Outro motivo": { es: "Otro motivo" },
  Padrão: { es: "Predeterminado" },
  Perdidos: { es: "Perdidos" },
  Preço: { es: "Precio" },
  "Probabilidade recalculada automaticamente": { es: "Probabilidad recalculada automáticamente" },
  "Probabilidade {probabilidade}%, {faixa}. Ver o porquê.": {
    es: "Probabilidad {probabilidade}%, {faixa}. Ver el porqué.",
  },
  "Produto indisponível": { es: "Producto no disponible" },
  "Propõe: {label}": { es: "Propone: {label}" },
  "Remover responsável": { es: "Quitar responsable" },
  Renomear: { es: "Renombrar" },
  Responsável: { es: "Responsable" },
  "Responsável: {label}": { es: "Responsable: {label}" },
  Retomar: { es: "Retomar" },
  "Retomar contato com este negócio": { es: "Retomar contacto con este negocio" },
  "Retomar contato?": { es: "¿Retomar contacto?" },
  "Salvando...": { es: "Guardando..." },
  "Salvando…": { es: "Guardando…" },
  "Sem evidências registradas.": { es: "Sin evidencias registradas." },
  "Sem nome": { es: "Sin nombre" },
  "Sem resposta do cliente": { es: "Sin respuesta del cliente" },
  "Selecione a etapa": { es: "Seleccioná la etapa" },
  Stage: { es: "Etapa" },
  "Status: {label}": { es: "Estado: {label}" },
  "Subir «{nome}» na lista": { es: "Subir «{nome}» en la lista" },
  "Tag: todas": { es: "Etiqueta: todas" },
  "Tag: {tag}": { es: "Etiqueta: {tag}" },
  "Tags: {tags}": { es: "Etiquetas: {tags}" },
  "Tag…": { es: "Etiqueta…" },
  Todos: { es: "Todos" },
  "Tornar padrão": { es: "Volver predeterminado" },
  "Valor (R$)": { es: "Valor (R$)" },
  "Valor inválido": { es: "Valor inválido" },
  agora: { es: "ahora" },
  "conversa sem mensagens": { es: "conversación sin mensajes" },
  "em {etapa}": { es: "en {etapa}" },
  "nova tag": { es: "nueva etiqueta" },
  "registro que sustenta": { es: "registro que lo sustenta" },
  vencendo: { es: "por vencer" },
  "ver a mensagem": { es: "ver el mensaje" },
  "{idade} em {etapa}": { es: "{idade} en {etapa}" },
  "{n} ações": { es: "{n} acciones" },
  "{n} lead atribuído.": { es: "{n} lead asignado." },
  "{n} lead sem responsável.": { es: "{n} lead sin responsable." },
  "{n} leads atribuídos.": { es: "{n} leads asignados." },
  "{n} leads sem responsável.": { es: "{n} leads sin responsable." },
  "{n} sem ler": { es: "{n} sin leer" },
  "{n} selecionado": { es: "{n} seleccionado" },
  "{n} selecionados": { es: "{n} seleccionados" },

  // ─── Contatos ───
  "Customer 360 — busque, filtre e gerencie contatos.": { es: "Customer 360 — buscá, filtrá y gestioná contactos." },
  "Novo contato": { es: "Nuevo contacto" },
  "Buscar por nome, email ou telefone…": { es: "Buscar por nombre, email o teléfono…" },
  "Todas as origens": { es: "Todos los orígenes" },
  Manual: { es: "Manual" },
  WhatsApp: { es: "WhatsApp" },
  Nuvemshop: { es: "Nuvemshop" },
  Origem: { es: "Origen" },
  "Limpar filtros": { es: "Limpiar filtros" },
  "Erro ao carregar contatos.": { es: "Error al cargar contactos." },
  "Tentar novamente": { es: "Intentar de nuevo" },
  "Carregar mais": { es: "Cargar más" },
  "Erro ao carregar contato.": { es: "Error al cargar el contacto." },
  "Contato anonimizado (LGPD)": { es: "Contacto anonimizado (LGPD)" },
  " em {data}": { es: " el {data}" },
  " — edição bloqueada.": { es: " — edición bloqueada." },
  Anonimizado: { es: "Anonimizado" },
  "Visão geral": { es: "Visión general" },
  Timeline: { es: "Línea de tiempo" },
  LGPD: { es: "LGPD" },
  "Display name": { es: "Nombre para mostrar" },
  Email: { es: "Correo electrónico" },
  "Última atividade": { es: "Última actividad" },
  "Criado em": { es: "Creado el" },
  Tags: { es: "Etiquetas" },
  "Direito ao esquecimento (LGPD)": { es: "Derecho al olvido (LGPD)" },
  "A anonimização é irreversível. Use somente após confirmação formal do titular ou ordem judicial.": {
    es: "La anonimización es irreversible. Usala solo después de la confirmación formal del titular o de una orden judicial.",
  },
  "Este contato já foi anonimizado": { es: "Este contacto ya fue anonimizado" },
  "Anonimizar contato": { es: "Anonimizar contacto" },
  Status: { es: "Estado" },
  Ativo: { es: "Activo" },
  "Dados inválidos": { es: "Datos inválidos" },
  "Contato criado": { es: "Contacto creado" },
  "Preencha pelo menos um identificador (email ou telefone).": {
    es: "Completá al menos un identificador (email o teléfono).",
  },
  "Telefone (E.164)": { es: "Teléfono (E.164)" },
  "CPF (opcional)": { es: "CPF (opcional)" },
  "Contato atualizado": { es: "Contacto actualizado" },
  "Editar contato": { es: "Editar contacto" },
  "Atualize os dados deste contato.": { es: "Actualizá los datos de este contacto." },
  "Contato já estava anonimizado.": { es: "El contacto ya estaba anonimizado." },
  "Contato anonimizado.": { es: "Contacto anonimizado." },
  "Anonimizar contato (LGPD)": { es: "Anonimizar contacto (LGPD)" },
  'Esta ação é irreversível. O nome será substituído por "Contato Anonimizado #N", email/telefone/CPF serão limpos, e atividades terão conteúdo redigido.': {
    es: 'Esta acción es irreversible. El nombre será reemplazado por "Contacto Anonimizado #N", el email/teléfono/CPF se van a borrar, y las actividades tendrán el contenido redactado.',
  },
  "Justificativa (mínimo 10 caracteres)": { es: "Justificación (mínimo 10 caracteres)" },
  "Ex.: Solicitação formal do titular via email em DD/MM/YYYY": {
    es: "Ej.: Solicitud formal del titular por email el DD/MM/AAAA",
  },
  "{n}/10 caracteres mínimos": { es: "{n}/10 caracteres mínimos" },
  Continuar: { es: "Continuar" },
  "Para confirmar, digite": { es: "Para confirmar, escribí" },
  "abaixo.": { es: "abajo." },
  Confirmação: { es: "Confirmación" },
  "Anonimizando…": { es: "Anonimizando…" },
  "Anonimizar permanentemente": { es: "Anonimizar permanentemente" },
  Hoje: { es: "Hoy" },
  Ontem: { es: "Ayer" },
  "Erro ao carregar timeline.": { es: "Error al cargar la línea de tiempo." },
  "Nenhuma atividade registrada ainda.": { es: "Todavía no hay actividad registrada." },
  "Não foi possível carregar as sugestões agora.": { es: "No fue posible cargar las sugerencias ahora." },
  "Não foi possível registrar a decisão.": { es: "No fue posible registrar la decisión." },
  "O assistente ouviu isto na conversa": { es: "El asistente escuchó esto en la conversación" },
  "{n} aguardando você": { es: "{n} esperando tu confirmación" },
  "Nada foi salvo ainda. Confira o que a pessoa escreveu e decida.": {
    es: "Todavía no se guardó nada. Revisá lo que la persona escribió y decidí.",
  },
  "E-mail": { es: "Correo electrónico" },
  "(hoje: {valor})": { es: "(hoy: {valor})" },
  "Está certo, salvar": { es: "Está bien, guardar" },
  Descartar: { es: "Descartar" },

  // ─── Configurações, Conexões e Templates ───
  " — as respostas do cliente não chegam e a janela de 24 horas nunca abre.": {
    es: " — las respuestas del cliente no llegan, y la ventana de 24 horas nunca se abre.",
  },
  " — se o número não responder, nada é salvo.": { es: " — si el número no responde, no se guarda nada." },
  " — se sair desta tela sem copiá-lo, reconecte para gerar outro.": {
    es: " — si salís de esta pantalla sin copiarlo, reconectá para generar otro.",
  },
  ") nas variáveis de ambiente desta instalação. Enquanto isso, não dá para conectar, reconectar nem excluir os números pareados por QR — excluir um número também o desconecta do aparelho, e sem o serviço isso não acontece.": {
    es: ") en las variables de entorno de esta instalación. Mientras tanto, no se puede conectar, reconectar ni eliminar los números emparejados por QR — eliminar un número también lo desconecta del dispositivo, y sin el servicio eso no pasa.",
  },
  ").": { es: ")." },
  "+ Adicionar botão ({atual}/{limite})": { es: "+ Agregar botón ({atual}/{limite})" },
  "+ variação de até": { es: "+ variación de hasta" },
  ", na seção de Webhook. Sem esse passo o canal envia, mas": {
    es: ", en la sección de Webhook. Sin este paso el canal envía, pero",
  },
  ". Já apareceu aqui o caso oposto: o container no ar e o endereço configurado apontando para um lugar que não existe — subir o container de novo não conserta isso.": {
    es: ". Ya pasó acá el caso contrario: el contenedor arriba y la dirección configurada apuntando a un lugar que no existe — levantar el contenedor de nuevo no arregla eso.",
  },
  ": a resposta do cliente não chega, e nada na tela avisa. O segredo aparece": {
    es: ": la respuesta del cliente no llega, y nada en la pantalla avisa. El secreto aparece",
  },
  "A conexão pode ser nova sem que o número seja. O aquecimento conta a idade do NÚMERO — se você deixar em branco, ele é tratado como recém-criado e começa liberando pouco por dia.": {
    es: "La conexión puede ser nueva sin que el número lo sea. El calentamiento cuenta la edad del NÚMERO — si lo dejás en blanco, se lo trata como recién creado y empieza liberando poco por día.",
  },
  "A credencial é": { es: "La credencial es" },
  "A credencial é testada contra o provedor antes de ser gravada.": {
    es: "La credencial se prueba contra el proveedor antes de guardarse.",
  },
  "A janela de envio é avaliada neste fuso (ex.: America/Sao_Paulo).": {
    es: "La ventana de envío se evalúa en este huso (ej.: America/Sao_Paulo).",
  },
  "A plataforma revisa antes de aprovar — o modelo nasce pendente e some da lista de envio até ela decidir.": {
    es: "La plataforma revisa antes de aprobar — el modelo nace pendiente y desaparece de la lista de envío hasta que ella decida.",
  },
  "A revisão exige um exemplo de cada valor. Sem eles o modelo é recusado.": {
    es: "La revisión exige un ejemplo de cada valor. Sin ellos el modelo es rechazado.",
  },
  "Abrir link": { es: "Abrir link" },
  "Acrescentar etapa ao fim": { es: "Agregar etapa al final" },
  "Adicionados ao set padrão. Cada pipeline pode ter seus próprios motivos.": {
    es: "Agregados al set predeterminado. Cada pipeline puede tener sus propios motivos.",
  },
  "Ainda não verificado": { es: "Todavía no verificado" },
  "Aquecimento automático de número novo": { es: "Calentamiento automático de número nuevo" },
  Arquivar: { es: "Archivar" },
  "Arquivar «{nome}»? A coluna sai do quadro e para de receber negócios novos. Nada é apagado — o histórico de quem passou por ela continua guardado —, mas": {
    es: "¿Archivar «{nome}»? La columna sale del tablero y deja de recibir negocios nuevos. Nada se borra — el historial de quien pasó por ella se conserva —, pero",
  },
  "As escolhas voltaram para o que está gravado agora — confira e escolha de novo.": {
    es: "Las elecciones volvieron a lo que está guardado ahora — revisá y elegí de nuevo.",
  },
  "Atualizar saúde": { es: "Actualizar estado" },
  "Autenticação — código de verificação": { es: "Autenticación — código de verificación" },
  "Avatar URL": { es: "URL del avatar" },
  Cabeçalho: { es: "Encabezado" },
  "Cabeçalho ({formato}):": { es: "Encabezado ({formato}):" },
  "Cabeçalho de texto": { es: "Encabezado de texto" },
  "Cabeçalho de texto (opcional)": { es: "Encabezado de texto (opcional)" },
  "Campos a assinar": { es: "Campos a firmar" },
  "Canal conectado.": { es: "Canal conectado." },
  "Canal excluído.": { es: "Canal eliminado." },
  "Canal oficial não conectado": { es: "Canal oficial no conectado" },
  "Canal removido. O que estava ligado a ele continua guardado.": {
    es: "Canal eliminado. Lo que estaba ligado a él sigue guardado.",
  },
  "Carregando as etapas deste funil…": { es: "Cargando las etapas de este embudo…" },
  "Carregando conexões…": { es: "Cargando conexiones…" },
  Categoria: { es: "Categoría" },
  "Chave de API": { es: "Clave de API" },
  "Cole isto no painel da Meta": { es: "Pegá esto en el panel de Meta" },
  "Cole os dois valores abaixo no webhook do seu provedor. Sem isso o CRM": {
    es: "Pegá los dos valores de abajo en el webhook de tu proveedor. Sin esto el CRM",
  },
  "Como o cliente vai ver": { es: "Cómo lo va a ver el cliente" },
  Conectado: { es: "Conectado" },
  "Conectado!": { es: "¡Conectado!" },
  "Conectado: {nome} {telefone}": { es: "Conectado: {nome} {telefone}" },
  "Conectar novo WhatsApp": { es: "Conectar nuevo WhatsApp" },
  "Conectar por {rotulo}": { es: "Conectar por {rotulo}" },
  "Conecte seu primeiro número de WhatsApp para começar a atender.": {
    es: "Conectá tu primer número de WhatsApp para empezar a atender.",
  },
  "Conexões WhatsApp": { es: "Conexiones WhatsApp" },
  Conta: { es: "Cuenta" },
  Conteúdo: { es: "Contenido" },
  "Continua no inbox: {lista}.": { es: "Sigue en el inbox: {lista}." },
  "Copiado.": { es: "Copiado." },
  Copiar: { es: "Copiar" },
  Criar: { es: "Crear" },
  "Crie templates no Gerenciador do WhatsApp e clique em": {
    es: "Creá plantillas en el Administrador de WhatsApp y hacé clic en",
  },
  "Custom fields (JSON array)": { es: "Custom fields (array JSON)" },
  "Custom fields: JSON inválido. Esperado um array.": {
    es: "Custom fields: JSON inválido. Se esperaba un array.",
  },
  "Dados inválidos.": { es: "Datos inválidos." },
  Deal: { es: "Negocio" },
  "Desligado por padrão: envio em domingo aumenta o risco de denúncia e bloqueio.": {
    es: "Apagado por defecto: enviar en domingo aumenta el riesgo de denuncia y bloqueo.",
  },
  "Duas colunas têm papel especial: a": { es: "Dos columnas tienen un rol especial: la" },
  Em: { es: "En" },
  "Enviar aos domingos": { es: "Enviar los domingos" },
  "Erro:": { es: "Error:" },
  "Escolha a etapa": { es: "Elegí la etapa" },
  "Escolhas salvas.": { es: "Elecciones guardadas." },
  "Espelho da conta": { es: "Espejo de la cuenta" },
  "Esta etapa é a que o assistente usa para «{rotulo}». Arquivando, ele para de mover o card nesse passo até você escolher outra etapa em": {
    es: "Esta es la etapa que el asistente usa para «{rotulo}». Al archivarla, deja de mover la tarjeta en ese paso hasta que elijas otra etapa en",
  },
  "Esta instalação está com o banco atrasado.": { es: "Esta instalación tiene la base de datos atrasada." },
  "Estas são as colunas do seu quadro, na ordem em que o cliente avança. Você pode renomear, criar, reordenar e arquivar.": {
    es: "Estas son las columnas de tu tablero, en el orden en que el cliente avanza. Podés renombrar, crear, reordenar y archivar.",
  },
  "Este canal tem registros internos, por isso ele é arquivado em vez de apagado.": {
    es: "Este canal tiene registros internos, por eso se archiva en vez de borrarse.",
  },
  "Este número foi desvinculado do WhatsApp. Para usá-lo de novo é preciso parear outra vez.": {
    es: "Este número fue desvinculado de WhatsApp. Para usarlo de nuevo hay que emparejarlo otra vez.",
  },
  "Este número já está aquecido — pular o aquecimento": {
    es: "Este número ya está calentado — saltar el calentamiento",
  },
  "Este número não tem conversa, mensagem nem configuração ligada a ele.": {
    es: "Este número no tiene conversación, mensaje ni configuración ligada a él.",
  },
  "Este número é usado desde": { es: "Este número se usa desde" },
  "Estes limites protegem o número contra bloqueio do WhatsApp. Campo vazio usa o padrão seguro do sistema (mostrado no campo).": {
    es: "Estos límites protegen el número contra el bloqueo de WhatsApp. Campo vacío usa el valor seguro predeterminado del sistema (mostrado en el campo).",
  },
  "Etapa atualizada.": { es: "Etapa actualizada." },
  "Etapas deste funil": { es: "Etapas de este embudo" },
  "Ex:": { es: "Ej:" },
  "Excluir {nome}": { es: "Eliminar {nome}" },
  "Excluir {nome} — indisponível enquanto o serviço do WhatsApp não estiver ativo": {
    es: "Eliminar {nome} — no disponible mientras el servicio de WhatsApp no esté activo",
  },
  "Excluir {nome}?": { es: "¿Eliminar {nome}?" },
  "Exemplo do valor {n}": { es: "Ejemplo del valor {n}" },
  "Falta aplicar a migration que registra canal excluído. Até lá, um número que você excluir continua aparecendo nesta lista.": {
    es: "Falta aplicar la migration que registra el canal eliminado. Hasta entonces, un número que elimines sigue apareciendo en esta lista.",
  },
  "Falta ligar a volta": { es: "Falta conectar la vuelta" },
  "Falta {lista} no texto. A numeração é sequencial e a plataforma recusa quando há buraco.": {
    es: "Falta {lista} en el texto. La numeración es secuencial y la plataforma rechaza cuando hay un hueco.",
  },
  "Faltam o endereço e a chave do serviço (": { es: "Faltan la dirección y la clave del servicio (" },
  "Fica salvo, mas sem número — para de atender: {lista}.": {
    es: "Queda guardado, pero sin número — deja de atender: {lista}.",
  },
  "Fuso horário": { es: "Huso horario" },
  "Fuso horário IANA": { es: "Huso horario IANA" },
  "Gerar novo QR": { es: "Generar nuevo QR" },
  "Guardada cifrada. Depois de gravar ela não é mostrada de novo — para trocar, cole a nova.": {
    es: "Guardada cifrada. Después de guardarla no se muestra de nuevo — para cambiarla, pegá la nueva.",
  },
  "Guardado cifrado. Não é exibido de volta em nenhum momento.": {
    es: "Guardado cifrado. No se muestra de vuelta en ningún momento.",
  },
  "Hoje o aquecimento libera {cap} envio(s) — o número tem {dias} dia(s) de uso. Enquanto esse número for menor que o teto diário, é ELE que limita, e mexer no teto diário não muda nada.": {
    es: "Hoy el calentamiento libera {cap} envío(s) — el número tiene {dias} día(s) de uso. Mientras ese número sea menor que el tope diario, es ÉL el que limita, y tocar el tope diario no cambia nada.",
  },
  "Hora de fim da janela": { es: "Hora de fin de la ventana" },
  "Hora de início da janela": { es: "Hora de inicio de la ventana" },
  "ID da conta do WhatsApp Business": { es: "ID de la cuenta de WhatsApp Business" },
  "ID do número de telefone": { es: "ID del número de teléfono" },
  Idioma: { es: "Idioma" },
  "Imagem do cabeçalho": { es: "Imagen del encabezado" },
  "Intervalo mínimo entre envios em segundos": { es: "Intervalo mínimo entre envíos en segundos" },
  "Intervalo mínimo entre mensagens do mesmo número, mais uma variação aleatória — ritmo cravado parece robô para o WhatsApp.": {
    es: "Intervalo mínimo entre mensajes del mismo número, más una variación aleatoria — un ritmo clavado parece robot para WhatsApp.",
  },
  "Ir para as etapas do funil": { es: "Ir a las etapas del embudo" },
  "Ir para o mapeamento do assistente": { es: "Ir al mapeo del asistente" },
  "Janela de envio (horário local)": { es: "Ventana de envío (horario local)" },
  Ligar: { es: "Llamar" },
  Lost: { es: "Perdido" },
  "Marcar mesmo assim": { es: "Marcar de todos modos" },
  "Marketing — promoção, novidade, reengajamento": { es: "Marketing — promoción, novedad, reenganche" },
  "Motivos de perda (separados por vírgula)": { es: "Motivos de pérdida (separados por coma)" },
  "Motivos de perda extras (separados por vírgula)": { es: "Motivos de pérdida extra (separados por coma)" },
  "Mover os negócios e arquivar": { es: "Mover los negocios y archivar" },
  "Mover «{nome}» uma coluna para frente": { es: "Mover «{nome}» una columna hacia adelante" },
  "Mover «{nome}» uma coluna para trás": { es: "Mover «{nome}» una columna hacia atrás" },
  "Mudar isso": { es: "Cambiar esto" },
  "Máximo de mensagens que este número envia por dia. Números novos também respeitam o aquecimento automático abaixo, o que for menor.": {
    es: "Máximo de mensajes que este número envía por día. Los números nuevos también respetan el calentamiento automático de abajo, el que sea menor.",
  },
  "Nenhum modelo espelhado ainda. Clique em": { es: "Todavía no hay ningún modelo espejado. Hacé clic en" },
  "Nenhum número conectado ainda.": { es: "Todavía no hay ningún número conectado." },
  "Nenhum template ainda": { es: "Todavía no hay ninguna plantilla" },
  "No celular: WhatsApp → Aparelhos conectados → Conectar um aparelho → escaneie o código.": {
    es: "En el celular: WhatsApp → Dispositivos vinculados → Vincular un dispositivo → escaneá el código.",
  },
  "Nome completo": { es: "Nombre completo" },
  "Nome da etapa «{nome}»": { es: "Nombre de la etapa «{nome}»" },
  "Nome da nova coluna": { es: "Nombre de la nueva columna" },
  "Nome da nova etapa": { es: "Nombre de la nueva etapa" },
  "Nome de exibição": { es: "Nombre para mostrar" },
  "Nome do modelo": { es: "Nombre de la plantilla" },
  "Não conectado": { es: "No conectado" },
  "Não conecte um número novo por causa disto: recarregue a página. Se persistir, o servidor do sistema está fora do ar.": {
    es: "No conectes un número nuevo por esto: recargá la página. Si persiste, el servidor del sistema está caído.",
  },
  "Não consegui falar com a plataforma.": { es: "No pude comunicarme con la plataforma." },
  "Não consegui subir a imagem.": { es: "No pude subir la imagen." },
  "Não deu para salvar agora. Tente de novo em instantes.": {
    es: "No se pudo guardar ahora. Probá de nuevo en un momento.",
  },
  "Não foi possível carregar as etapas deste funil agora. Recarregue a página.": {
    es: "No fue posible cargar las etapas de este embudo ahora. Recargá la página.",
  },
  "Não foi possível carregar seus números — esta lista não está mostrando o que existe.": {
    es: "No fue posible cargar tus números — esta lista no está mostrando lo que existe.",
  },
  "Não foi possível carregar seus números.": { es: "No fue posible cargar tus números." },
  "Não foi possível conectar.": { es: "No fue posible conectar." },
  "Não foi possível excluir o canal.": { es: "No fue posible eliminar el canal." },
  "Não foi possível gerar um novo QR.": { es: "No fue posible generar un nuevo QR." },
  "Não foi possível iniciar a conexão.": { es: "No fue posible iniciar la conexión." },
  "Não foi possível reconectar.": { es: "No fue posible reconectar." },
  "Não foi possível salvar.": { es: "No fue posible guardar." },
  "Não foi possível verificar o que está ligado a este número. A exclusão continua possível — quem decide apagar ou arquivar é o servidor, e ele preserva o histórico quando existe.": {
    es: "No fue posible verificar qué está ligado a este número. La eliminación sigue siendo posible — quien decide borrar o archivar es el servidor, y preserva el historial cuando existe.",
  },
  "Não mover o card": { es: "No mover la tarjeta" },
  "Número com {dias} dia(s) de uso — já formado. Vale só o teto diário abaixo.": {
    es: "Número con {dias} día(s) de uso — ya formado. Solo vale el tope diario de abajo.",
  },
  "Número conectado": { es: "Número conectado" },
  "Número recém-conectado envia pouco e sobe aos poucos — enviar demais no início é a causa nº 1 de bloqueio.": {
    es: "Un número recién conectado envía poco y sube de a poco — enviar demasiado al principio es la causa nº 1 de bloqueo.",
  },
  "O assistente só envia mensagens dentro desta janela. Fora dela, a resposta fica agendada para a próxima abertura — você vê o motivo na conversa.": {
    es: "El asistente solo envía mensajes dentro de esta ventana. Fuera de ella, la respuesta queda programada para la próxima apertura — vas a ver el motivo en la conversación.",
  },
  "O assistente usa esta etapa para «{rotulo}».": { es: "El asistente usa esta etapa para «{rotulo}»." },
  "O endereço que o provedor usa para entregar as mensagens. O segredo não é mostrado de novo — para obter um novo, reconecte.": {
    es: "La dirección que el proveedor usa para entregar los mensajes. El secreto no se muestra de nuevo — para obtener uno nuevo, reconectá.",
  },
  "O número será desconectado do WhatsApp e sai desta lista.": {
    es: "El número se va a desconectar de WhatsApp y sale de esta lista.",
  },
  "O que a plataforma aprovou para este número. É daqui que sai a mensagem quando a janela de 24h fecha.": {
    es: "Lo que la plataforma aprobó para este número. Es de acá que sale el mensaje cuando la ventana de 24h se cierra.",
  },
  "O serviço do WhatsApp não está configurado.": { es: "El servicio de WhatsApp no está configurado." },
  "Organização atualizada.": { es: "Organización actualizada." },
  "Os templates vivem na sua conta do WhatsApp Business (Meta) — esta tela é um espelho deles. Conecte o canal oficial em": {
    es: "Las plantillas viven en tu cuenta de WhatsApp Business (Meta) — esta pantalla es un espejo de ellas. Conectá el canal oficial en",
  },
  "Os três valores vêm do seu app na Meta (": { es: "Los tres valores vienen de tu app en Meta (" },
  "Papel de «{nome}» no funil": { es: "Rol de «{nome}» en el embudo" },
  "Para onde o card vai em cada passo": { es: "A dónde va la tarjeta en cada paso" },
  "Para onde vão os negócios de «{nome}»": { es: "A dónde van los negocios de «{nome}»" },
  "Para usar este número de novo, será preciso conectá-lo outra vez.": {
    es: "Para usar este número de nuevo, va a ser necesario conectarlo otra vez.",
  },
  "Perfil atualizado.": { es: "Perfil actualizado." },
  "Preencha o texto para ver a prévia.": { es: "Completá el texto para ver la vista previa." },
  "Preparando o código…": { es: "Preparando el código…" },
  "Proteção de envio": { es: "Protección de envío" },
  "Proteção de envio atualizada.": { es: "Protección de envío actualizada." },
  "Proteção de envio — {label}": { es: "Protección de envío — {label}" },
  "QR Code para conectar WhatsApp": { es: "Código QR para conectar WhatsApp" },
  "Qualidade do número segundo a plataforma: {qualidade}": {
    es: "Calidad del número según la plataforma: {qualidade}",
  },
  "Quando o agente avança no atendimento, o card do cliente pode andar sozinho no seu funil. Escolha para qual etapa ele vai em cada momento. Deixar em «não mover» é uma escolha válida — o card fica onde está e o agente segue trabalhando.": {
    es: "Cuando el agente avanza en la atención, la tarjeta del cliente puede moverse sola en tu embudo. Elegí a qué etapa va en cada momento. Dejarlo en «no mover» es una elección válida — la tarjeta queda donde está y el agente sigue trabajando.",
  },
  "Razão social": { es: "Razón social" },
  "Reconectar {nome}": { es: "Reconectar {nome}" },
  "Recusado: {motivo}": { es: "Rechazado: {motivo}" },
  "Remover botão {n}": { es: "Quitar botón {n}" },
  "Resposta rápida": { es: "Respuesta rápida" },
  "Retenção de mídia (dias)": { es: "Retención de medios (días)" },
  "Ritmo entre envios (segundos)": { es: "Ritmo entre envíos (segundos)" },
  Rodapé: { es: "Pie de página" },
  "Rodapé (opcional) — texto pequeno no fim da mensagem": {
    es: "Pie de página (opcional) — texto pequeño al final del mensaje",
  },
  "Salvar estas escolhas": { es: "Guardar estas elecciones" },
  "Salvar proteção": { es: "Guardar protección" },
  "Salvar vocabulário e campos": { es: "Guardar vocabulario y campos" },
  "Se você roda tudo na mesma máquina, o container sobe com": {
    es: "Si corrés todo en la misma máquina, el contenedor se levanta con",
  },
  "Sem corpo espelhado — sincronize para trazer o conteúdo.": {
    es: "Sin cuerpo espejado — sincronizá para traer el contenido.",
  },
  "Sincronizado em {data}": { es: "Sincronizado el {data}" },
  "Sincronizado: {inserted} novo(s), {updated} atualizado(s), {disabled} desativado(s).": {
    es: "Sincronizado: {inserted} nuevo(s), {updated} actualizado(s), {disabled} desactivado(s).",
  },
  "Sincronizar com a Meta": { es: "Sincronizar con Meta" },
  "Sua sessão expirou. Entre de novo para salvar suas escolhas.": {
    es: "Tu sesión expiró. Entrá de nuevo para guardar tus elecciones.",
  },
  "Subir imagem (JPG/PNG)": { es: "Subir imagen (JPG/PNG)" },
  "Só templates aprovados podem ser enviados fora da janela de 24 horas.": {
    es: "Solo las plantillas aprobadas se pueden enviar fuera de la ventana de 24 horas.",
  },
  "Só uma etapa pode ser a de fechamento. Marcar esta desmarca «{nome}».": {
    es: "Solo una etapa puede ser la de cierre. Marcar esta desmarca «{nome}».",
  },
  "Só uma etapa pode ser a de perda. Marcar esta desmarca «{nome}».": {
    es: "Solo una etapa puede ser la de pérdida. Marcar esta desmarca «{nome}».",
  },
  "Telefone do botão {n}": { es: "Teléfono del botón {n}" },
  "Teto diário de envios": { es: "Tope diario de envíos" },
  "Teto diário de mensagens": { es: "Tope diario de mensajes" },
  "Texto da mensagem. Use {{1}}, {{2}} para os valores que mudam.": {
    es: "Texto del mensaje. Usá {{1}}, {{2}} para los valores que cambian.",
  },
  "Texto do botão": { es: "Texto del botón" },
  "Texto do botão {n}": { es: "Texto del botón {n}" },
  "Tipo do botão {n}": { es: "Tipo del botón {n}" },
  "Token de acesso": { es: "Token de acceso" },
  "Trocar email — em breve.": { es: "Cambiar email — próximamente." },
  "Trocar imagem": { es: "Cambiar imagen" },
  "URL do botão {n}": { es: "URL del botón {n}" },
  "URL política de privacidade": { es: "URL de la política de privacidad" },
  "Um número oficial (WhatsApp Business) conectado através do seu provedor. As mensagens entram e saem pelo CRM, e os modelos aprovados são os mesmos da sua conta.": {
    es: "Un número oficial (WhatsApp Business) conectado a través de tu proveedor. Los mensajes entran y salen por el CRM, y las plantillas aprobadas son las mismas de tu cuenta.",
  },
  "Upload de arquivo — em breve. Cole uma URL pública.": {
    es: "Subida de archivo — próximamente. Pegá una URL pública.",
  },
  "Usar o padrão ({fuso})": { es: "Usar el predeterminado ({fuso})" },
  "Utilidade — aviso de pedido, agendamento, cobrança": { es: "Utilidad — aviso de pedido, turno, cobro" },
  "Vale só o teto diário abaixo. Use apenas se o número já envia há semanas: pular o aquecimento num número novo é o caminho mais rápido para o bloqueio.": {
    es: "Solo vale el tope diario de abajo. Usalo solo si el número ya envía hace semanas: saltar el calentamiento en un número nuevo es el camino más rápido al bloqueo.",
  },
  "Validando com a Meta…": { es: "Validando con Meta…" },
  "Validar e conectar": { es: "Validar y conectar" },
  "Variação aleatória máxima em segundos": { es: "Variación aleatoria máxima en segundos" },
  "Verificado {data}": { es: "Verificado el {data}" },
  "Verificando o que está ligado a este número…": { es: "Verificando qué está ligado a este número…" },
  "Verificando…": { es: "Verificando…" },
  "Vocabulário e campos": { es: "Vocabulario y campos" },
  "Você ainda não tem nenhum funil. Enquanto for assim, o agente atende normalmente, mas não tem para onde levar o card de ninguém — não há etapas para onde mover. Criar o funil é feito por quem instalou o sistema, direto no banco; depois ele aparece aqui para você escolher a etapa de cada passo.": {
    es: "Todavía no tenés ningún embudo. Mientras sea así, el agente atiende con normalidad, pero no tiene a dónde llevar la tarjeta de nadie — no hay etapas a dónde mover. Crear el embudo lo hace quien instaló el sistema, directo en la base de datos; después aparece acá para que elijas la etapa de cada paso.",
  },
  "Você não tem permissão para mudar a configuração deste funil.": {
    es: "No tenés permiso para cambiar la configuración de este embudo.",
  },
  WABA: { es: "WABA" },
  Webhook: { es: "Webhook" },
  "WhatsApp conectado!": { es: "¡WhatsApp conectado!" },
  "WhatsApp → Configuração": { es: "WhatsApp → Configuración" },
  "WhatsApp → Configuração da API": { es: "WhatsApp → Configuración de la API" },
  Won: { es: "Ganado" },
  "a partir de {dias} dias: sem limite de aquecimento": { es: "a partir de {dias} días: sin límite de calentamiento" },
  "ajuste de proteção de envio": { es: "ajuste de protección de envío" },
  "ajustes de proteção de envio": { es: "ajustes de protección de envío" },
  "arquivo de {tipo} enviado no disparo": { es: "archivo de {tipo} enviado en el disparo" },
  "cole a chave": { es: "pegá la clave" },
  conversa: { es: "conversación" },
  conversas: { es: "conversaciones" },
  "de fechamento": { es: "de cierre" },
  "de perda": { es: "de pérdida" },
  e: { es: "y" },
  "envia mas não recebe": { es: "envía pero no recibe" },
  "ex.: María": { es: "ej.: María" },
  "ex: Sem orçamento, Concorrente": { es: "ej: Sin presupuesto, Competencia" },
  "gravada — preencha para trocar": { es: "guardada — completá para cambiar" },
  h: { es: "h" },
  "h até": { es: "h hasta" },
  "id da conta conectada no provedor": { es: "id de la cuenta conectada en el proveedor" },
  mensagem: { es: "mensaje" },
  mensagens: { es: "mensajes" },
  "mídia": { es: "multimedia" },
  nome_do_modelo: { es: "nombre_de_la_plantilla" },
  "não configurado nesta instalação — defina no servidor antes de continuar": {
    es: "no configurado en esta instalación — definilo en el servidor antes de continuar",
  },
  "não dá para trazer a coluna de volta por aqui": { es: "no se puede traer la columna de vuelta por acá" },
  "não recebe": { es: "no recibe" },
  "para começar a sincronizar.": { es: "para empezar a sincronizar." },
  "para trazer os que já existem na plataforma.": { es: "para traer los que ya existen en la plataforma." },
  "provedor parceiro": { es: "proveedor asociado" },
  remover: { es: "quitar" },
  "roteador de IA": { es: "enrutador de IA" },
  "roteadores de IA": { es: "enrutadores de IA" },
  "sem número informado": { es: "sin número informado" },
  "sem parâmetros": { es: "sin parámetros" },
  "sem teto definido": { es: "sin tope definido" },
  "uma única vez": { es: "una única vez" },
  "validada com a Meta antes de ser gravada": { es: "validada con Meta antes de guardarse" },
  "versão de agente": { es: "versión de agente" },
  "versões de agente": { es: "versiones de agente" },
  "{dias}+ dias: até {cap}/dia": { es: "{dias}+ días: hasta {cap}/día" },
  "{nome} atualizado.": { es: "{nome} actualizado." },
  "{n} de {total} sincronizada(s).": { es: "{n} de {total} sincronizada(s)." },
  "{n} parâmetro(s)": { es: "{n} parámetro(s)" },
  "{n} template(s)": { es: "{n} plantilla(s)" },
  "{n} valor(es)": { es: "{n} valor(es)" },
  "«Para onde o card vai em cada passo»": { es: "«A dónde va la tarjeta en cada paso»" },
  "«{nome}» entrou no fim do funil.": { es: "«{nome}» entró al final del embudo." },
  "«{nome}» saiu do quadro.": { es: "«{nome}» salió del tablero." },
  "· número": { es: "· número" },
  "É o identificador do número no painel do provedor — não o da Meta.": {
    es: "Es el identificador del número en el panel del proveedor — no el de Meta.",
  },
  "é onde ele se perde. Cada funil precisa de uma de cada — por isso a marcação se muda de lugar, não se apaga.": {
    es: "es donde se pierde. Cada embudo necesita una de cada — por eso la marca se cambia de lugar, no se borra.",
  },
  "é onde o negócio vira venda, e a": { es: "es donde el negocio se convierte en venta, y la" },
  "•••• (já guardado — preencha para trocar)": { es: "•••• (ya guardado — completá para cambiar)" },

  // ─── Cabeçalhos de página (PageHeader, em Server Components) ───
  Perfil: { es: "Perfil" },
  "Informações pessoais. Email só pode ser trocado em breve.": {
    es: "Información personal. El email solo se puede cambiar próximamente.",
  },
  Organização: { es: "Organización" },
  "Dados da empresa, retenção de mídia, DPO. Admin only.": {
    es: "Datos de la empresa, retención de medios, DPO. Solo admin.",
  },
  "Para onde o agente leva o card em cada passo do atendimento, vocabulário, custom fields e motivos de perda.": {
    es: "A dónde el agente lleva la tarjeta en cada paso de la atención, vocabulario, custom fields y motivos de pérdida.",
  },
  "Para onde o agente leva o card em cada passo do atendimento.": {
    es: "A dónde el agente lleva la tarjeta en cada paso de la atención.",
  },
  "Por onde seu negócio fala com o cliente. Conecte números por QR ou o número oficial da Meta, e acompanhe a saúde de cada um.": {
    es: "Por dónde tu negocio habla con el cliente. Conectá números por QR o el número oficial de Meta, y seguí la salud de cada uno.",
  },

  // ─── Inbox: CRMSidePanel ───
  "O que acontece a seguir?": { es: "¿Qué pasa a continuación?" },
  "Próximo passo desta demanda": { es: "Próximo paso de este pedido" },
  "Não consegui ler estes dados.": { es: "No pude leer estos datos." },
  "Tentar de novo": { es: "Intentar de nuevo" },
  "Nenhum funil configurado nesta organização.": { es: "No hay ningún embudo configurado en esta organización." },
  "Selecione uma conversa para ver detalhes do contato.": {
    es: "Seleccioná una conversación para ver los detalles del contacto.",
  },
  Contato: { es: "Contacto" },
  "Demandas abertas": { es: "Pedidos abiertos" },
  "há {n}h": { es: "hace {n}h" },
  "Nenhuma demanda aberta.": { es: "No hay ningún pedido abierto." },
  "Leads recentes": { es: "Leads recientes" },
  "Pedidos recentes": { es: "Pedidos recientes" },
  Atividade: { es: "Actividad" },
  "Aguardando o cliente": { es: "Esperando al cliente" },

  // ─── Inbox: ChatThread ───
  "Selecione uma conversa": { es: "Seleccioná una conversación" },
  "Erro ao carregar mensagens.": { es: "Error al cargar los mensajes." },
  "Nenhuma mensagem nesta conversa.": { es: "Ningún mensaje en esta conversación." },
  "Carregar mais antigas": { es: "Cargar más antiguos" },

  // ─── Inbox: tags (contato/conversa) ───
  "Remover tag {tag}": { es: "Quitar etiqueta {tag}" },
  "Sem tags no contato.": { es: "Sin etiquetas en el contacto." },
  "Adicionar tag ao contato": { es: "Agregar etiqueta al contacto" },
  "Adicionar tag": { es: "Agregar etiqueta" },
  "Tags da conversa": { es: "Etiquetas de la conversación" },
  "Adicionar tag à conversa": { es: "Agregar etiqueta a la conversación" },

  // ─── Inbox: ConversationList / ConversationListItem ───
  "Erro ao carregar conversas.": { es: "Error al cargar conversaciones." },
  Aguardando: { es: "Esperando" },
  "Aguardando {tempo}": { es: "Esperando {tempo}" },
  "Posição {n} na fila": { es: "Posición {n} en la cola" },
  "Entrou por {canal}": { es: "Entró por {canal}" },

  // ─── Inbox: atalhos de teclado ───
  "Fechar conversa?": { es: "¿Cerrar conversación?" },
  "Atalhos de teclado": { es: "Atajos de teclado" },
  "Próxima conversa": { es: "Próxima conversación" },
  "Conversa anterior": { es: "Conversación anterior" },
  "Focar resposta": { es: "Enfocar respuesta" },
  "Enviar a mensagem": { es: "Enviar el mensaje" },
  "Quebrar linha sem enviar": { es: "Salto de línea sin enviar" },
  "Assumir conversa": { es: "Asumir conversación" },
  "Fechar conversa": { es: "Cerrar conversación" },
  "Mostrar atalhos": { es: "Mostrar atajos" },

  // ─── Inbox: janela de 24h / bloqueio ───
  "O cliente ainda não escreveu — a janela de 24h nunca abriu. Só um modelo aprovado sai daqui.": {
    es: "El cliente todavía no escribió — la ventana de 24h nunca se abrió. Solo una plantilla aprobada puede salir de acá.",
  },
  "A janela de 24h fechou há {tempo}. Só um modelo aprovado sai daqui — texto livre é recusado pela plataforma.": {
    es: "La ventana de 24h se cerró hace {tempo}. Solo una plantilla aprobada puede salir de acá — el texto libre es rechazado por la plataforma.",
  },
  "Contato bloqueado — envio de mensagens desabilitado.": {
    es: "Contacto bloqueado — el envío de mensajes está deshabilitado.",
  },
  "Contato anonimizado — não é possível enviar mensagens.": {
    es: "Contacto anonimizado — no es posible enviar mensajes.",
  },
  "Conversa não encontrada ou fora do seu acesso.": { es: "Conversación no encontrada o fuera de tu acceso." },

  // ─── Inbox: JanelaFechadaAviso ───
  "Modelo enviado — a janela reabre quando o cliente responder.": {
    es: "Plantilla enviada — la ventana se reabre cuando el cliente responda.",
  },
  "Não consegui enviar o modelo.": { es: "No pude enviar la plantilla." },
  "Nenhum modelo aprovado ainda. Crie um em": { es: "Todavía no hay ninguna plantilla aprobada. Creá una en" },
  "Conexões → Templates": { es: "Conexiones → Plantillas" },
  "e envie quando a plataforma aprovar.": { es: "y enviala cuando la plataforma la apruebe." },
  "Modelo aprovado": { es: "Plantilla aprobada" },
  "Enviando…": { es: "Enviando…" },
  "Este modelo pede {n} valor(es) e ainda não dá para preenchê-los aqui — envie por": {
    es: "Esta plantilla pide {n} valor(es) y todavía no se pueden completar acá — enviala por",
  },
  ", ou escolha um modelo sem parâmetros.": { es: ", o elegí una plantilla sin parámetros." },

  // ─── Inbox: JanelaSelo ───
  "O cliente nunca escreveu": { es: "El cliente nunca escribió" },
  "Janela fechada há {tempo}": { es: "Ventana cerrada hace {tempo}" },
  "· só modelo": { es: "· solo plantilla" },
  "Passaram 24h desde a última mensagem do cliente. Só um modelo aprovado sai daqui — texto livre é recusado pela plataforma.": {
    es: "Pasaron 24h desde el último mensaje del cliente. Solo una plantilla aprobada puede salir de acá — el texto libre es rechazado por la plataforma.",
  },
  "Tempo restante para escrever texto livre. Depois disso, só modelo aprovado.": {
    es: "Tiempo restante para escribir texto libre. Después de eso, solo plantilla aprobada.",
  },
  "Janela {tempo}": { es: "Ventana {tempo}" },

  // ─── Inbox: MessageBubble ───
  Lida: { es: "Leído" },
  Entregue: { es: "Entregado" },
  Enviada: { es: "Enviado" },
  "Esta mensagem foi apagada": { es: "Este mensaje fue eliminado" },
  "O autor editou esta mensagem": { es: "El autor editó este mensaje" },
  editada: { es: "editado" },
  Falhou: { es: "Falló" },
  "Erro desconhecido": { es: "Error desconocido" },

  // ─── Inbox: NoteCard ───
  Alguém: { es: "Alguien" },
  "Nota interna · só o time vê": { es: "Nota interna · solo la ve el equipo" },
  "Excluir nota": { es: "Eliminar nota" },

  // ─── Inbox: ReassignDialog ───
  "Transferir conversa": { es: "Transferir conversación" },
  "A transferência é imediata: o atendente escolhido vira o responsável agora e a mudança fica registrada no histórico.": {
    es: "La transferencia es inmediata: el agente elegido se convierte en el responsable ahora, y el cambio queda registrado en el historial.",
  },
  "Transferir para": { es: "Transferir a" },
  "Carregando atendentes…": { es: "Cargando agentes…" },
  "Escolha o atendente": { es: "Elegí el agente" },
  "Atendente {id}": { es: "Agente {id}" },
  Atendente: { es: "Agente" },
  Gestor: { es: "Gerente" },
  Admin: { es: "Admin" },
  "Nenhum outro atendente disponível nesta organização.": {
    es: "No hay ningún otro agente disponible en esta organización.",
  },
  "Motivo (opcional)": { es: "Motivo (opcional)" },
  "Ex.: cliente pediu falar com o financeiro": { es: "Ej.: el cliente pidió hablar con el área financiera" },
  "Transferindo…": { es: "Transfiriendo…" },

  // ─── Inbox: SnoozeButton ───
  "Em 1 hora": { es: "En 1 hora" },
  "Em 3 horas": { es: "En 3 horas" },
  "Em 24 horas": { es: "En 24 horas" },
  "Lembrete ativo": { es: "Recordatorio activo" },
  "Cancelar lembrete": { es: "Cancelar recordatorio" },


  // ─── Achados na QA visual da Fase 1 (Inbox) ───
  "Número removido": { es: "Número eliminado" },
};

/**
 * Traduz, ou devolve o próprio texto.
 *
 * Nunca lança e nunca devolve vazio: um texto sem tradução aparece em
 * português, que é exatamente o comportamento de antes desta feature. Uma
 * tradução parcial não pode deixar a tela PIOR do que estava.
 *
 * `vars` substitui marcadores `{chave}` pelo valor — para frases com nome,
 * contagem etc. no meio (ex.: `t("Arquivar «{nome}»?", { nome: funil.name })`).
 * A CHAVE do dicionário continua sendo o texto em português, marcador incluso.
 */
export function traduzir(
  texto: string,
  idioma: Idioma,
  vars?: Record<string, string | number>,
): string {
  const base = idioma === "pt-BR" ? texto : (DICIONARIO[texto]?.[idioma] ?? texto);
  if (!vars) return base;
  return Object.entries(vars).reduce(
    (acc, [chave, valor]) => acc.split(`{${chave}}`).join(String(valor)),
    base,
  );
}
