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
