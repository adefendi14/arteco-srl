#!/usr/bin/env python3
"""Genera PDF preventivo costi sito Arteco — dominio, hosting e GitHub Team."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

OUTPUT = Path(__file__).resolve().parents[2] / "Preventivo-Costi-Sito-Arteco.pdf"

BRAND = colors.HexColor("#A64B2A")
INK = colors.HexColor("#1A1615")
MUTED = colors.HexColor("#5C534F")
SAND = colors.HexColor("#F3ECE0")


def build_pdf():
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=2 * cm,
        leftMargin=2 * cm,
        topMargin=2 * cm,
        bottomMargin=2 * cm,
        title="Preventivo costi sito web Arteco",
    )

    styles = getSampleStyleSheet()
    title = ParagraphStyle(
        "Title",
        parent=styles["Heading1"],
        fontName="Helvetica-Bold",
        fontSize=22,
        textColor=INK,
        spaceAfter=6,
    )
    subtitle = ParagraphStyle(
        "Subtitle",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=11,
        textColor=MUTED,
        spaceAfter=16,
    )
    h2 = ParagraphStyle(
        "H2",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=14,
        textColor=BRAND,
        spaceBefore=14,
        spaceAfter=8,
    )
    body = ParagraphStyle(
        "Body",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=10,
        leading=14,
        textColor=INK,
        spaceAfter=6,
    )
    small = ParagraphStyle(
        "Small",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.5,
        leading=12,
        textColor=MUTED,
    )
    highlight = ParagraphStyle(
        "Highlight",
        parent=body,
        fontName="Helvetica-Bold",
        fontSize=13,
        textColor=BRAND,
        spaceBefore=6,
        spaceAfter=10,
    )

    story = []

    story.append(Paragraph("Preventivo costi annuale", title))
    story.append(
        Paragraph(
            "Dominio, hosting e repository privata · <b>www.artecovalvole.com</b><br/>"
            "Progetto: Arteco S.r.l.",
            subtitle,
        )
    )
    story.append(Paragraph("Data: 1 settembre 2026", small))
    story.append(Spacer(1, 0.3 * cm))
    story.append(HRFlowable(width="100%", thickness=1, color=BRAND, spaceAfter=12))

    story.append(Paragraph("Costi ricorrenti", h2))
    story.append(
        Paragraph(
            "Stima annuale per dominio, mantenimento del sito online 24/7 e repository "
            "GitHub privata con GitHub Pages. Esclusi email aziendale, form preventivi "
            "e altri servizi aggiuntivi.",
            body,
        )
    )
    story.append(Spacer(1, 0.2 * cm))

    data = [
        ["Voce", "Fornitore", "Costo/anno"],
        ["Dominio artecovalvole.com", "Cloudflare Registrar", "~€ 10"],
        ["Piano GitHub Team (1 utente)", "GitHub", "~€ 45"],
        ["Hosting sito (24/7)", "GitHub Pages", "Incluso"],
        ["HTTPS / SSL", "Incluso in GitHub Pages", "€ 0"],
        ["", "TOTALE", "~€ 55 / anno"],
    ]
    table = Table(data, colWidths=[6 * cm, 5.5 * cm, 3.5 * cm])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), BRAND),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, -1), 10),
                ("ROWBACKGROUNDS", (0, 1), (-1, -2), [colors.white, SAND]),
                ("BACKGROUND", (0, -1), (-1, -1), colors.HexColor("#E6DCCB")),
                ("FONTNAME", (1, -1), (2, -1), "Helvetica-Bold"),
                ("TEXTCOLOR", (2, -1), (2, -1), BRAND),
                ("FONTSIZE", (2, -1), (2, -1), 11),
                ("GRID", (0, 0), (-1, -1), 0.25, colors.HexColor("#E6DCCB")),
                ("ALIGN", (2, 1), (2, -1), "RIGHT"),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    story.append(table)
    story.append(Spacer(1, 0.4 * cm))
    story.append(Paragraph("Costo annuo stimato: ~€ 55 (circa € 4,60 al mese)", highlight))

    story.append(Paragraph("Dettaglio", h2))
    story.append(
        Paragraph(
            "<b>Dominio (.com)</b> — Registrazione e rinnovo annuale di artecovalvole.com "
            "(include www). Prezzo indicativo Cloudflare Registrar: ~$ 10,46/anno (~€ 10).",
            body,
        )
    )
    story.append(
        Paragraph(
            "<b>GitHub Team</b> — Piano necessario per repository privata con GitHub Pages "
            "attivo. Listino ufficiale: <b>$ 4/utente/mese</b> (~$ 48/anno, ~€ 45 con cambio "
            "indicativo). Calcolo basato su <b>1 utente</b>. Il sito pubblicato resta "
            "<b>pubblico e indicizzabile</b>; il codice sorgente resta privato.",
            body,
        )
    )
    story.append(
        Paragraph(
            "<b>Hosting (GitHub Pages)</b> — Pubblicazione sito 24/7 inclusa nel piano Team; "
            "nessun costo aggiuntivo per hosting o certificato SSL.",
            body,
        )
    )

    story.append(Paragraph("Note", h2))
    story.append(
        Paragraph(
            "• GitHub fattura in USD; l'equivalente in EUR varia con il cambio.<br/>"
            "• Ogni utente aggiuntivo al piano Team: +$ 4/mese (~€ 45/anno ciascuno).<br/>"
            "• Prezzi dominio indicativi a settembre 2026; verificare listino ufficiale.<br/>"
            "• Email aziendale, form preventivi e servizi extra non inclusi.<br/>"
            "• Documento informativo; non costituisce offerta commerciale vincolante.",
            small,
        )
    )

    story.append(Spacer(1, 0.6 * cm))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#E6DCCB")))
    story.append(
        Paragraph(
            "Progetto sito web Arteco S.r.l.",
            ParagraphStyle("Footer", parent=small, alignment=TA_CENTER, spaceBefore=8),
        )
    )

    doc.build(story)
    print(f"PDF creato: {OUTPUT}")


if __name__ == "__main__":
    build_pdf()
