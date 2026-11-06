/* Toptech Computers 2.0 website chat popup - talks to the n8n chat webhook.
   Adds a floating "Chat" button (bottom-left) and a chat panel. No other page code is touched. */
(function () {
  'use strict';
  if (window.__ttcChat) return;
  window.__ttcChat = true;

  var WEBHOOK_URL = 'https://aroganam2026.app.n8n.cloud/webhook/toptech-chat';
  var PHONE_DISPLAY = '98413 71813';
  var PHONE_HREF = 'tel:+919841371813';

  function visitorId() {
    try {
      var id = localStorage.getItem('toptech_chat_id');
      if (!id) {
        id = 'web_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
        localStorage.setItem('toptech_chat_id', id);
      }
      return id;
    } catch (e) {
      return 'web_' + Date.now().toString(36);
    }
  }

  var vid = visitorId();
  var panel, bodyEl, inputEl, sendBtn, fab;
  var loading = false;
  var started = false;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function clean(t) {
    return String(t == null ? '' : t).replace(/\*\*/g, '').replace(/__/g, '');
  }

  // Turns the workflow answer into { text, options }.
  function parseAnswer(data) {
    if (data && data.list && Array.isArray(data.list.sections)) {
      var rows = [];
      data.list.sections.forEach(function (s) { rows = rows.concat(s.rows || []); });
      return { text: clean(data.list.body || data.text), options: rows };
    }
    if (data && Array.isArray(data.buttons) && data.buttons.length) {
      var first = String(data.text || '').split(/\n\s*\n\s*1\)/)[0];
      return { text: clean(first), options: data.buttons };
    }
    var options = Array.isArray(data && data.options) ? data.options
      : Array.isArray(data && data.rows) ? data.rows : null;
    return { text: clean((data && (data.text || data.reply || data.message)) || "Sorry, I didn't catch that."), options: options };
  }

  function scrollDown() {
    bodyEl.scrollTop = bodyEl.scrollHeight;
  }

  function addMsg(from, text, options) {
    var wrap = el('div', 'ttc-msg ttc-msg-' + from);
    wrap.appendChild(el('div', 'ttc-bubble', clean(text)));
    if (options && options.length) {
      var box = el('div', 'ttc-options');
      options.forEach(function (opt) {
        var label = opt.title || opt.label || opt.text || String(opt);
        var b = el('button', 'ttc-option', label);
        b.type = 'button';
        b.addEventListener('click', function () {
          if (loading) return;
          addMsg('user', label);
          send(label, true, opt.id || opt.value || '');
        });
        box.appendChild(b);
      });
      wrap.appendChild(box);
    }
    bodyEl.appendChild(wrap);
    scrollDown();
    return wrap;
  }

  function setLoading(on) {
    loading = on;
    sendBtn.disabled = on;
    var t = bodyEl.querySelector('.ttc-typing');
    if (on && !t) {
      var w = el('div', 'ttc-msg ttc-msg-bot ttc-typing');
      w.appendChild(el('div', 'ttc-bubble', 'typing…'));
      bodyEl.appendChild(w);
      scrollDown();
    } else if (!on && t) {
      t.remove();
    }
  }

  function errorMsg() {
    var wrap = el('div', 'ttc-msg ttc-msg-bot');
    var b = el('div', 'ttc-bubble');
    b.appendChild(document.createTextNode('Sorry, something went wrong reaching us. Please call '));
    var a = el('a', 'ttc-link', PHONE_DISPLAY);
    a.href = PHONE_HREF;
    b.appendChild(a);
    b.appendChild(document.createTextNode(' and our team will help you.'));
    wrap.appendChild(b);
    bodyEl.appendChild(wrap);
    scrollDown();
  }

  function send(text, silent, interactiveId) {
    if (!text || loading) return;
    if (!silent) addMsg('user', text);
    inputEl.value = '';
    setLoading(true);
    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: vid, message: text, name: 'Website Visitor', interactiveId: interactiveId || '' })
    })
      .then(function (res) {
        if (!res.ok) throw new Error('bad response');
        return res.json();
      })
      .then(function (data) {
        var r = parseAnswer(data);
        setLoading(false);
        addMsg('bot', r.text, r.options);
      })
      .catch(function () {
        setLoading(false);
        errorMsg();
      });
  }

  function build() {
    panel = el('div', 'ttc-panel');
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Chat with Toptech Computers 2.0');

    var head = el('div', 'ttc-head');
    head.appendChild(el('span', 'ttc-title', 'Chat with Toptech'));
    var close = el('button', 'ttc-close', '×');
    close.type = 'button';
    close.setAttribute('aria-label', 'Close chat');
    close.addEventListener('click', closePanel);
    head.appendChild(close);

    bodyEl = el('div', 'ttc-body');

    var form = el('form', 'ttc-form');
    inputEl = el('input', 'ttc-input');
    inputEl.type = 'text';
    inputEl.placeholder = 'Type your message…';
    inputEl.setAttribute('aria-label', 'Type your message');
    sendBtn = el('button', 'ttc-send', 'Send');
    sendBtn.type = 'submit';
    form.appendChild(inputEl);
    form.appendChild(sendBtn);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      send(inputEl.value.trim(), false, '');
    });

    panel.appendChild(head);
    panel.appendChild(bodyEl);
    panel.appendChild(form);
    document.body.appendChild(panel);
  }

  function openPanel() {
    if (!panel) build();
    panel.classList.add('ttc-open');
    if (fab) fab.classList.add('ttc-hidden');
    if (!started) {
      started = true;
      send('Hi', true, '');
    }
    setTimeout(function () { inputEl.focus(); }, 50);
  }

  function closePanel() {
    if (panel) panel.classList.remove('ttc-open');
    if (fab) fab.classList.remove('ttc-hidden');
  }

  function buildFab() {
    fab = el('button', 'ttc-fab');
    fab.type = 'button';
    fab.setAttribute('aria-label', 'Chat with us');
    fab.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg><span>Chat with us</span>';
    fab.addEventListener('click', openPanel);
    document.body.appendChild(fab);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePanel();
  });

  if (document.body) buildFab();
  else document.addEventListener('DOMContentLoaded', buildFab);
})();
